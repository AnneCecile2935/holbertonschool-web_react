import { Subjects } from "./Teacher";
import { Subject } from "./Subject";

declare module "./Teacher" {
	namespace Subjects {
		interface Teacher {
			experienceTeachingC?: number;
		}
	}
}
export class Cpp extends Subject {
	getRequirements(): string {
		return "Here is the list of requirements for Cpp";
	}

	getAvailableTeacher(): string {
		if (this.teacher.experienceTeachingC) {
			return `Available Teacher: ${this.teacher.firstName}`;
		} else {
			return "No available teacher";
		}
	}
}
