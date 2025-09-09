//1 Build a teacher interface

interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: boolean | string | number | undefined;
}

const teacher : Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,
};
console.log(teacher);

// 2 Extending the Teacher class to Director

interface Directors extends Teacher{
  numberOfReports: number;
}

const director: Directors = {
	firstName: "Alice",
	lastName: "Smith",
	fullTimeEmployee: true,
	location: "Paris",
	numberOfReports: 5,
};

console.log(director)

// 3 Printing teachers
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

console.log(printTeacher("John", "Doe"));

// 4 Wrinting a class


// Décrire la singature du constructeur
interface StudentConstrutor {
	new(firstName: string, lastName: string): StudentClassInterface;
}

// Décrire les méthodes publiques que la classe doit implémenter
interface StudentClassInterface{
	workOnHomework(): string; // afficher qu'il travaille
	displayName(): string; // afficher le prénom de l'étudiant
}

// Implémenter la classe
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName:string) {
    this.firstName = firstName;
    this.lastName = lastName;

  }
  workOnHomework(): string {
	return "Currently working";
  }
  displayName(): string {
	return this.firstName
  }
}

// Utiliser les interfaces pour instancier la classe
// On utilise l'interface du constructeur pour typer "Student"
const Student: StudentConstrutor = StudentClass;

// On crée une instance de StudentClass via l'interface

const student: StudentClassInterface = new Student("John", "Doe");

console.log(student.displayName());
console.log(student.workOnHomework());
