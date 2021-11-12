import html from "../core.js";
import Header from '../component/Header.js';
import Section from '../component/Section.js';
import Filter from '../component/Filter.js';
import TodoLists from '../component/TodoLists.js';
import { connect } from '../store.js';

function App({ motors }) {
    return html
        `<div class="container m-5 p-2 rounded mx-auto bg-light shadow">
            ${Header()}
            <div class="section">
                ${Section()}
            </div>
            ${motors.length > 0 && Filter()}
            ${TodoLists()}
        </div>`;
}

export default connect()(App);