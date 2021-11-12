import storage from "./util/storage.js";
const initState = {
    motors: storage.get(),
    editIndex: null,
    filters: {
        val: 'all',
        all: motors => motors,
        completed: motors => motors.filter(item => item.completed),
        active: motors => motors.filter(item => !item.completed)
    },
    sorts: {
        val: '',
        'default': motors => motors,
        'a-z': motors => motors.sort( (a, b) => a.text.toLowerCase().localeCompare(b.text.toLowerCase())),
        'z-a': motors => motors.sort( (a, b) => b.text.toLowerCase().localeCompare(a.text.toLowerCase())),
        'date-old': motors => motors.sort( (a, b) => {
            if (a.date < b.date) return -1;
        }),
        'date-new': motors => motors.sort( (a, b) => {
            if (a.date > b.date) return -1;
        })
    }
}

const allReducer = {
    'ADD': ({ motors }, ...text) => {
        motors.push(
            {
                text: text[0],
                date: text[1],
                'completed': false
            }
        )

        storage.set(motors);
    },
    'START_EDIT': (state, index) => {
        state.editIndex = index;
    },
    'END_EDIT': (state, text) => {
        state.motors[state.editIndex].text = text;
        state.editIndex = null;
        storage.set(state.motors);
    },
    'DELETE': ({ motors }, index) => {
        motors.splice(index, 1);
        storage.set(motors);
    },
    'TOGGLE_CHECKBOX': ({ motors }, index) => {
        motors[index].completed = !motors[index].completed;
        storage.set(motors);
    },
    'FILTER': ({ filters }, value) => {
        filters.val = value;
    },
    'SORT': ({ sorts, motors }, value) => {
        sorts.val = value;
        sorts[value] && sorts[value](motors);
    }
}

export default function reducer(state = initState, action, args) {
    console.log(1, args);
    allReducer[action] && allReducer[action](state, ...args);
    return state;
}