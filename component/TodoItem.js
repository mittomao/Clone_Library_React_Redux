import html from "../core.js";
import { connect } from '../store.js';
import formatDate from "../util/formatDate.js";

function TodoItem({ motor, index, editIndex }) {
    return html`
    <div class="row px-3 align-items-center todo-item rounded ${editIndex === index && 'editing'}">
        <div class="col-auto m-1 p-0 d-flex align-items-center">
            <h2 class="m-0 p-0 icon-checkbox">
                <input 
                    type="checkbox" 
                    id="${motor.text}" 
                    readonly 
                    value="${motor.text}" 
                    ${motor.completed && 'checked'}
                    onchange = "dispatch('TOGGLE_CHECKBOX', ${index})"
                >
                <label for="${motor.text}">${motor.text}</label>
            </h2>
            <h2 class="input-edit">
                <input 
                    type="text" 
                    class="form-control form-control-lg border-0 edit-todo-input rounded px-3" 
                    value="${motor.text}" 
                    focus
                    onkeyup = "event.keyCode === 13 && dispatch('END_EDIT', this.value.trim())"
                    autofocus 
                />
            </h2>
        </div>
        <div class="col-auto ml-auto p-0 todo-actions">
            <div class="row d-flex align-items-center justify-content-end">
                <h5 class="m-0 p-0 px-2">
                    <i 
                        class="fa fa-pencil text-info btn m-0 p-0" 
                        data-toggle="tooltip" 
                        data-placement="bottom" 
                        title="Edit todo"
                        onclick = "dispatch('START_EDIT', ${index})"
                    >
                    </i>
                </h5>
                <h5 class="m-0 p-0 px-2">
                    <i 
                        class="fa fa-trash-o text-danger btn m-0 p-0" 
                        data-toggle="tooltip" 
                        data-placement="bottom" 
                        title="Delete todo"
                        onclick = "dispatch('DELETE', ${index})"
                    >
                    </i>
                </h5>
            </div>
            <div class="row todo-created-info">
                <div class="col-auto d-flex align-items-center pr-2">
                    <i class="fa fa-info-circle my-2 px-2 text-black-50 btn" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Created date"></i>
                    <label class="date-label my-2 text-black-50">${formatDate(motor.date)}</label>
                </div>
            </div>
        </div>
    </div>`
}

export default TodoItem;

