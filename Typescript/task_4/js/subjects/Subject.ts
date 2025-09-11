import { Subjects } from "./Teacher";

  export class Subject {
      protected teacher!: Subjects.Teacher;

      setTeacher(teacher: Subjects.Teacher): void {
        this.teacher = teacher;
      }
    }
