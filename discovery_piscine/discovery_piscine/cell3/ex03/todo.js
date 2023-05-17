// Chores Array
const chores = [];

// Input
const chore_input = document.getElementById('chore-input');

// Input Value
let chV = chore_input.value;

// Structure
const chore_display = `
    <tr>
        <th>
            <label>
                <input type="checkbox" class="checkbox" />
            </label>
        </th>
        <td>
            <div class="flex items-center space-x-3">
                <div>
                <div class="font-bold" id="chore-title">${chV}</div>
                </div>
            </div>
        </td>
    </tr>
`;

// Local Storage chores variable
let chLS = localStorage.getItem("chores");

// On page load
document.body.onload = () => {
    if(!chLS) {
        localStorage.setItem("chores", chores);
    }
}

chore_input.addEventListener('keydown', (e) => {
    if(e.code == "Enter") {
        if(chV !== "") {

        } else {
            alert("The input can't be EMPTY!");
        }
    }
});
