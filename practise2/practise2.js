localStorage.setItem("name", "kismot ali")
localStorage.setItem("age", 45)

const age = localStorage.getItem('age');
const name = localStorage.getItem('name');

localStorage.clear();
console.log(age, name);

const student = {
    firstName: "Abraham",
    lastName: "Linkon"
}
// console.log(JSON.stringify(student))
console.log(student);
localStorage.setItem("Student", JSON.stringify(student))