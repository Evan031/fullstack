// This function is called to display items
function addToList(item) {
    text += `<li>${item}</li>`;
}

let favLanguages = ["Java", "PHP", "Python", "Ruby", "C#"];
let text = "";
favLanguages.forEach(addToList);
document.getElementById("favLanguages").innerHTML = text;

// Create an average grade function
function average_grade(input_array) {
    let length = input_array.length;
    let sum = 0;
    for (var item = 0; item < length; item++) {
      sum += input_array[item];
    }
    let average = sum / length;
    return average;
}

myJSTestResults = [40, 60, 80, 80, 85];
document.getElementById("myGrades").innerHTML = average_grade(myJSTestResults);

