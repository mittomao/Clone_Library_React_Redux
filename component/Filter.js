import html from "../core.js";
import { connect } from '../store.js';

function Filter({ filters, sorts }) {
    const options = {
        filters: [
            {
                value: 'all',
                text: 'All'
            },
            {
                value: 'completed',
                text: 'Completed'
            },
            {
                value: 'active',
                text: 'Active'
            }
        ],
        sorts: [
            {
                value: 'default',
                text: 'Default'
            },
            {
                value: 'a-z',
                text: 'Alphabet (A-Z)'
            },
            {
                value: 'z-a',
                text: 'Alphabet (Z-A)'
            },
            {
                value: 'date-new',
                text: 'Date New'
            },
            {
                value: 'date-old',
                text: 'Date Old'
            }
        ]
    };
    return html`
    <div class="row m-1 p-3 px-5 justify-content-end">
        <div class="col-auto d-flex align-items-center">
            <label class="text-secondary my-2 pr-2 view-opt-label">Filter</label>
            <select class="custom-select custom-select-sm btn my-2" onchange = "dispatch('FILTER', this.value)">
                ${options.filters.map(item => `<option value="${item.value}" ${filters.val === item.value && 'selected'}>${item.text}</option>`)}
            </select>
        </div>
        <div class="col-auto d-flex align-items-center px-1 pr-3">
            <label class="text-secondary my-2 pr-2 view-opt-label">Sort</label>
            <select class="custom-select custom-select-sm btn my-2" onchange = "dispatch('SORT', this.value)">
                ${options.sorts.map(item => `<option value="${item.value}" ${sorts.val === item.value && 'selected'}>${item.text}</option>`)}
            </select>
            <i class="fa fa fa-sort-amount-asc text-info btn mx-0 px-0 pl-1" data-toggle="tooltip" data-placement="bottom" title="Ascending"></i>
            <i class="fa fa fa-sort-amount-desc text-info btn mx-0 px-0 pl-1 d-none" data-toggle="tooltip" data-placement="bottom" title="Descending"></i>
        </div>
    </div>`
}

export default connect()(Filter);

