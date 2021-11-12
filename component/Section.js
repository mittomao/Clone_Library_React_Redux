import html from "../core.js";
import { connect } from '../store.js';

const state = {
    isClick: false
}

window.handleClick = () => { 
    state.isClick = !state.isClick;
}

function Section() {
    return html`
    <div class="row m-1 p-3">
        <div class="col col-11 mx-auto">
            <div class="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
                <div class="col">
                    <input 
                        class="form-control form-control-lg border-0 add-todo-input bg-transparent rounded" 
                        type="text" 
                        placeholder="Add new ..."
                        onkeyup = "event.keyCode === 13 && dispatch('ADD', this.value, ${Date.now()})"
                        autofocus 
                    >
                </div>
                <div class="col-auto px-0 mx-0 mr-2">
                    <button type="button" class="btn btn-primary" onclick = "handleClick(event)">Add</button>
                </div>
            </div>
        </div>
    </div>`
}

export default Section;

