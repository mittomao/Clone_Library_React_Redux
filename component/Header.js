import html from "../core.js";
import { connect } from '../store.js';

function Header(props) { 
    return html`
        <div class="row m-1 p-4">
            <div class="col">
                <div class="p-1 h1 text-primary text-center mx-auto display-inline-block">
                    <i class="fa fa-check bg-primary text-white rounded p-2"></i>
                    <u>My Todo-s</u>
                </div>
            </div>
        </div>`
}

export default Header;

