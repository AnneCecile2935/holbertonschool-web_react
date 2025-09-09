interface DirectorInterface{
	workFromHome(): string,
	getCoffeeBreak(): string,
	workDirectorTasks(): string,
}

class Director implements DirectorInterface{
	workFromHome(): string {
		return "Working from home";
	}

	getCoffeeBreak(): string {
		return "Getting a coffee break";
	}

	workDirectorTasks(): string {
		return "Getting to director tasks";
	}
}

interface TeacherInterface{
	workFromHome(): string,
	getCoffeeBreak():string,
	workTeacherTasks():string,
}

class Teacher implements TeacherInterface{
	workFromHome(): string {
		return "Cannot work from home";
	}

	getCoffeeBreak(): string {
		return "Cannot have a break";
	}

	workTeacherTasks(): string {
		return "Getting to work";
	}
}

function createEmployee(salary: number | string): Director | Teacher {
	if (typeof salary === "number" && salary < 500) {
		return new Teacher;
	} else {
		return new Director;
	}
}

// Examples

const employee1 = createEmployee(200); // Teacher
console.log(employee1.workFromHome());      // "Cannot work from home"
console.log(employee1.getCoffeeBreak());    // "Cannot have a break"
console.log((employee1 as Teacher).workTeacherTasks()); // "Getting to work"

const employee2 = createEmployee(1000); // Director
console.log(employee2.workFromHome());      // "Working from home"
console.log(employee2.getCoffeeBreak());    // "Getting a coffee break"
console.log((employee2 as Director).workDirectorTasks()); // "Getting to director tasks"

const employee3 = createEmployee("500"); // Director (car salary n'est pas un number)
console.log(employee3.workFromHome());      // "Working from home"


