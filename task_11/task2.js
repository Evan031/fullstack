// Dropdown list
function show_choice(select) {
    alert(select.options[select.selectedIndex].value);
}

// Driver code
const students = new Map([
    ["Aldon", 54],
    ["Warren", 89],
    ["Wesley", 46],
    ["Junior", 98],
    ["Robin", 23],
]);

let text = "";
students.forEach(function (value, key) {
    text += `<option value="${value}">${key}</option>`;
});

document.getElementById("grade_dropdown").innerHTML = text;
