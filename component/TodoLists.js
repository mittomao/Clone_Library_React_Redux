import html from "../core.js";
import { connect } from '../store.js';
import TodoItem from './TodoItem.js';

function TodoLists({ motors, editIndex, filters }) {
    let newMotors = filters[filters.val] && filters[filters.val](motors);
    
    return html`
    <div class="row mx-1 px-5 pb-3 w-80">
        <div class="col mx-auto">
            ${newMotors && newMotors.map((motor, index) => TodoItem({ motor, index, editIndex }))}
        </div>
        ${newMotors.length === 0 && `<div class="col mx-auto no-result">
                <h4>No result</h4>
            </div>`}
    </div>`
}

export default connect()(TodoLists);