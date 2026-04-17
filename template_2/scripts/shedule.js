const plans = {
    "1A": {
        name: "Klasa 1A - profil matematyczno-fizyczny",
        schedule: [
            {
                day: "Poniedziałek",
                lessons: [
                    { time: "8:00-8:45", subject: "Matematyka", teacher: "A. Kowalska", room: "25" },
                    { time: "8:55-9:40", subject: "Matematyka", teacher: "A. Kowalska", room: "25" },
                    { time: "9:50-10:35", subject: "Historia", teacher: "M. Nowak", room: "12" },
                    { time: "10:45-11:30", subject: "J. Polski", teacher: "K. Wiśniewska", room: "18" },
                    { time: "11:45-12:30", subject: "WF", teacher: "P. Woźniak", room: "sala gimn." },
                    { time: "12:40-13:25", subject: "Fizyka", teacher: "T. Lewandowski", room: "Lab. fizyki" }
                ]
            },
            {
                day: "Wtorek",
                lessons: [
                    { time: "8:00-8:45", subject: "Angielski", teacher: "J. Wiśniewska", room: "15" },
                    { time: "8:55-9:40", subject: "Matematyka", teacher: "A. Kowalska", room: "25" },
                    { time: "9:50-10:35", subject: "Plastyka", teacher: "A. Malinowska", room: "sala plastyki" },
                    { time: "10:45-11:30", subject: "Informatyka", teacher: "P. Woźniak", room: "24" },
                    { time: "11:45-12:30", subject: "Chemia", teacher: "E. Dąbrowska", room: "Lab. chemii" }
                ]
            },
            {
                day: "Środa",
                lessons: [
                    { time: "8:00-8:45", subject: "Fizyka", teacher: "T. Lewandowski", room: "Lab. fizyki" },
                    { time: "8:55-9:40", subject: "Geografia", teacher: "R. Szymański", room: "22" },
                    { time: "9:50-10:35", subject: "J. Polski", teacher: "K. Wiśniewska", room: "18" },
                    { time: "10:45-11:30", subject: "Matematyka", teacher: "A. Kowalska", room: "25" },
                    { time: "11:45-12:30", subject: "Angielski", teacher: "J. Wiśniewska", room: "15" },
                    { time: "12:40-13:25", subject: "WOS", teacher: "M. Nowak", room: "12" }
                ]
            },
            {
                day: "Czwartek",
                lessons: [
                    { time: "8:00-8:45", subject: "Matematyka", teacher: "A. Kowalska", room: "25" },
                    { time: "8:55-9:40", subject: "J. Niemiecki", teacher: "B. Kowalczyk", room: "16" },
                    { time: "9:50-10:35", subject: "Biologia", teacher: "E. Dąbrowska", room: "Lab. biologii" },
                    { time: "10:45-11:30", subject: "WF", teacher: "P. Woźniak", room: "sala gimn." },
                    { time: "11:45-12:30", subject: "Informatyka", teacher: "P. Woźniak", room: "24" }
                ]
            },
            {
                day: "Piątek",
                lessons: [
                    { time: "8:00-8:45", subject: "Religia", teacher: "K. Mazur", room: "10" },
                    { time: "8:55-9:40", subject: "J. Polski", teacher: "K. Wiśniewska", room: "18" },
                    { time: "9:50-10:35", subject: "Historia", teacher: "M. Nowak", room: "12" },
                    { time: "10:45-11:30", subject: "Matematyka", teacher: "A. Kowalska", room: "25" },
                    { time: "11:45-12:30", subject: "Godzina wychowawcza", teacher: "A. Kowalska", room: "25" }
                ]
            }
        ]
    },

        "2B": {
        name: "Klasa 2B - profil biologiczno-chemiczny",
        schedule: [
            {
                day: "Poniedziałek",
                lessons: [
                    { time: "8:00-8:45", subject: "Biologia", teacher: "E. Dąbrowska", room: "Lab. biologii" },
                    { time: "8:55-9:40", subject: "Chemia", teacher: "E. Dąbrowska", room: "Lab. chemii" },
                    { time: "9:50-10:35", subject: "J. Polski", teacher: "K. Wiśniewska", room: "18" },
                    { time: "10:45-11:30", subject: "Matematyka", teacher: "A. Kowalska", room: "25" },
                    { time: "11:45-12:30", subject: "Angielski", teacher: "J. Wiśniewska", room: "15" },
                    { time: "12:40-13:25", subject: "WF", teacher: "P. Woźniak", room: "sala gimn." }
                ]
            },
            {
                day: "Wtorek",
                lessons: [
                    { time: "8:00-8:45", subject: "Chemia", teacher: "E. Dąbrowska", room: "Lab. chemii" },
                    { time: "8:55-9:40", subject: "Biologia", teacher: "E. Dąbrowska", room: "Lab. biologii" },
                    { time: "9:50-10:35", subject: "Historia", teacher: "M. Nowak", room: "12" },
                    { time: "10:45-11:30", subject: "Geografia", teacher: "R. Szymański", room: "22" },
                    { time: "11:45-12:30", subject: "J. Niemiecki", teacher: "B. Kowalczyk", room: "16" }
                ]
            },
            {
                day: "Środa",
                lessons: [
                    { time: "8:00-8:45", subject: "Matematyka", teacher: "A. Kowalska", room: "25" },
                    { time: "8:55-9:40", subject: "Fizyka", teacher: "T. Lewandowski", room: "Lab. fizyki" },
                    { time: "9:50-10:35", subject: "J. Polski", teacher: "K. Wiśniewska", room: "18" },
                    { time: "10:45-11:30", subject: "WF", teacher: "P. Woźniak", room: "sala gimn." },
                    { time: "11:45-12:30", subject: "Informatyka", teacher: "P. Woźniak", room: "24" }
                ]
            },
            {
                day: "Czwartek",
                lessons: [
                    { time: "8:00-8:45", subject: "Biologia", teacher: "E. Dąbrowska", room: "Lab. biologii" },
                    { time: "8:55-9:40", subject: "Chemia", teacher: "E. Dąbrowska", room: "Lab. chemii" },
                    { time: "9:50-10:35", subject: "Angielski", teacher: "J. Wiśniewska", room: "15" },
                    { time: "10:45-11:30", subject: "WOS", teacher: "M. Nowak", room: "12" },
                    { time: "11:45-12:30", subject: "Matematyka", teacher: "A. Kowalska", room: "25" }
                ]
            },
            {
                day: "Piątek",
                lessons: [
                    { time: "8:00-8:45", subject: "Religia", teacher: "K. Mazur", room: "10" },
                    { time: "8:55-9:40", subject: "J. Polski", teacher: "K. Wiśniewska", room: "18" },
                    { time: "9:50-10:35", subject: "Historia", teacher: "M. Nowak", room: "12" },
                    { time: "10:45-11:30", subject: "Godzina wychowawcza", teacher: "E. Dąbrowska", room: "Lab. biologii" }
                ]
            }
        ]
    },
        
    "3C": {
        name: "Klasa 3C - profil humanistyczny",    
        schedule: [
            {
                day: "Poniedziałek",
                lessons: [
                    { time: "8:00-8:45", subject: "Fizyka", teacher: "T. Lewandowski", room: "Lab. fizyki" },
                    { time: "8:55-9:40", subject: "Informatyka", teacher: "P. Woźniak", room: "24" },
                    { time: "9:50-10:35", subject: "Geografia", teacher: "R. Szymański", room: "22" },
                    { time: "10:45-11:30", subject: "J. Polski", teacher: "K. Wiśniewska", room: "18" },
                    { time: "11:45-12:30", subject: "Matematyka", teacher: "A. Kowalska", room: "25" },
                    { time: "12:40-13:25", subject: "WF", teacher: "P. Woźniak", room: "sala gimn." }
                ]
            },
            {
                day: "Wtorek",
                lessons: [
                    { time: "8:00-8:45", subject: "Matematyka", teacher: "A. Kowalska", room: "25" },
                    { time: "8:55-9:40", subject: "WOS", teacher: "M. Nowak", room: "12" },
                    { time: "9:50-10:35", subject: "WF", teacher: "P. Woźniak", room: "sala gimn." },
                    { time: "10:45-11:30", subject: "Angielski", teacher: "J. Wiśniewska", room: "15" },
                    { time: "11:45-12:30", subject: "Chemia", teacher: "E. Dąbrowska", room:"Lab. chemii" }
                ]
            },
            {
                day:"Środa",
                lessons:[
                    {time:"8;00-8;45",subject:"Angielski",teacher:"J.Wiśniewska",room:"15"},
                    {time:"8;55-9;40",subject:"Chemia",teacher:"E.Dąbrowska",room:"Lab. chemii"},
                    {time:"9;50-10;35",subject:"J. Polski",teacher:"K.Wiśniewska",room:"18"},
                    {time:"10;45-11;30",subject:"Matematyka",teacher:"A.Kowalska",room:"25"},
                    {time:"11;45-12;30",subject:"Fizyka",teacher                :"T.Lewandowski",room:"Lab. fizyki"},
                    {time:"12;40-13;25",subject:"WOS",teacher:"M.Nowak",room:"12"}
                ]
            },
            {   
                day: "Czwartek",
                lessons: [
                    { time: "8:00-8:45", subject: "Plastyka", teacher: "A. Malinowska", room: "sala plastyki" },
                    { time: "8:55-9:40", subject: "WF", teacher: "P. Woźniak", room: "sala gimn." },
                    { time: "9:50-10:35", subject: "Fizyka", teacher: "T. Lewandowski", room: "Lab. fizyki" },
                    { time: "10:45-11:30", subject: "J. Niemiecki", teacher: "B. Kowalczyk", room: "16" },
                    { time: "11:45-12:30", subject: "Matematyka", teacher: "A. Kowalska", room: "25" }
                ]
            },
            {
                day: "Piątek",
                lessons: [
                    { time: "8:00-8:45", subject: "Religia", teacher: "K. Mazur", room: "10" },
                    { time: "8:55-9:40", subject: "J. Polski", teacher: "K. Wiśniewska", room: "18" },
                    { time: "9:50-10:35", subject: "Historia", teacher: "M. Nowak", room: "12" },
                    { time: "10:45-11:30", subject: "Matematyka", teacher: "A. Kowalska", room: "25" },
                    { time: "11:45-12:30", subject:"Godzina wychowawcza",teacher:"A.Kowalska",room:"25"}
                ]
            }
        ]
    }   
    // ... analogicznie dla innych klas
};

function generateSchedule(classData) {
    let table = `
        <table class="schedule-table">
            <thead>
                <tr>
                    <th>Dzień</th>
                    <th>Godzina</th>
                    <th>Przedmiot</th>
                    <th>Nauczyciel</th>
                    <th>Sala</th>
                </tr>
            </thead>
            <tbody>`;
    
    classData.schedule.forEach(daySchedule => {
        daySchedule.lessons.forEach((lesson, index) => {
            table += `
                <tr>
                    ${index === 0 ? `<td rowspan="${daySchedule.lessons.length}">${daySchedule.day}</td>` : ''}
                    <td class="lesson-time">${lesson.time}</td>
                    <td>${lesson.subject}</td>
                    <td>${lesson.teacher}</td>
                    <td class="lesson-room">${lesson.room}</td>
                </tr>`;
        });
    });
    
    table += `</tbody></table>`;
    return table;
}

const classSelect = document.getElementById("classSelect");
const planContainer = document.getElementById("plan-container");

function updatePlan() {
    const selectedClass = classSelect.value;
    planContainer.innerHTML = `
        <h2>${plans[selectedClass].name}</h2>
        ${generateSchedule(plans[selectedClass])}`;
}

classSelect.addEventListener("change", updatePlan);
window.addEventListener("DOMContentLoaded", updatePlan);