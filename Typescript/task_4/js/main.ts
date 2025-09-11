// main.ts
import { Subjects } from "./subjects/Teacher";
import { Subject } from "./subjects/Subject";
import { Cpp } from "./subjects/Cpp";
import { React } from "./subjects/React";
import { Java } from "./subjects/Java";

// Créer des enseignants avec différentes expériences
const teacherCpp: Subjects.Teacher = {
    firstName: "Alice",
    lastName: "Smith",
    experienceTeachingC: 10
};

const teacherReact: Subjects.Teacher = {
    firstName: "Bob",
    lastName: "Johnson",
    experienceTeachingReact: 5
};

const teacherJava: Subjects.Teacher = {
    firstName: "Charlie",
    lastName: "Brown",
    experienceTeachingJava: 8
};

const unqualifiedTeacher: Subjects.Teacher = {
    firstName: "David",
    lastName: "Wilson"
};

// Créer des instances de chaque matière
const cppCourse = new Cpp();
const reactCourse = new React();
const javaCourse = new Java();

// Assigner les enseignants qualifiés
cppCourse.setTeacher(teacherCpp);
reactCourse.setTeacher(teacherReact);
javaCourse.setTeacher(teacherJava);

// Tester les méthodes
console.log("--- Cpp Course ---");
console.log(cppCourse.getRequirements());
console.log(cppCourse.getAvailableTeacher());

console.log("\n--- React Course ---");
console.log(reactCourse.getRequirements());
console.log(reactCourse.getAvailableTeacher());

console.log("\n--- Java Course ---");
console.log(javaCourse.getRequirements());
console.log(javaCourse.getAvailableTeacher());

// Tester avec un enseignant non qualifié
console.log("\n--- Unqualified Teacher ---");
cppCourse.setTeacher(unqualifiedTeacher);
console.log(cppCourse.getAvailableTeacher());
