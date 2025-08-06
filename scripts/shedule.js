// Mini plan zajęć dla uczniów

const plans = {
"1A": [
    ["Poniedziałek", "Matematyka, Historia, J. Polski"],
    ["Wtorek", "Angielski, Matematyka, Plastyka"],
    ["Środa", "WF, Informatyka, Technika"],
    ["Czwartek", "Geografia, Biologia, J. Polski"],
    ["Piątek", "WOS, Angielski, Religia"]
],
"2B": [
    ["Poniedziałek", "Biologia, Chemia, WF"],
    ["Wtorek", "J. Polski, Historia, Biologia"],
    ["Środa", "Fizyka, Matematyka, Religia"],
    ["Czwartek", "Informatyka, Matematyka, Historia"],
    ["Piątek", "J. Polski, WF, Chemia"]
],
"3C": [
    ["Poniedziałek", "Fizyka, Informatyka, Geografia"],
    ["Wtorek", "Matematyka, WOS, WF"],
    ["Środa", "Angielski, Chemia, J. Polski"],
    ["Czwartek", "Plastyka, WF, Fizyka"],
    ["Piątek", "Matematyka, Historia, Biologia"]
]
};

function generateTable(data) {
    let table = `<table><thead><tr><th>Dzień</th><th>Zajęcia</th></tr></thead><tbody>`;
    data.forEach(([day, lessons]) => {
        table += `<tr><td>${day}</td><td>${lessons}</td></tr>`;
    });
    table += `</tbody></table>`;
    return table;
}

const classSelect = document.getElementById("classSelect");
const planContainer = document.getElementById("plan-container");

function updatePlan() {
const selectedClass = classSelect.value;
planContainer.innerHTML = generateTable(plans[selectedClass]);
}

classSelect.addEventListener("change", updatePlan);
window.addEventListener("DOMContentLoaded", updatePlan);

