import { Subjects } from "./Teacher";
import { Subject } from "./Subject";

declare module "./Teacher" {
	namespace Subjects {
		interface Teacher {
			experienceTeachingReact?: number;
		}
	}
}
export class React extends Subject {
	getRequirements(): string {
		return "Here is the list of requirements for React";
	}

	getAvailableTeacher(): string {
		if (this.teacher.experienceTeachingReact) {
			return `Available Teacher: ${this.teacher.firstName}`;
		} else {
			return "No available teacher";
		}
	}
}
