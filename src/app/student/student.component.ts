import {Component} from '@angular/core';
import {Student} from '../_models/student';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})


export class StudentComponent {
  students: Student[] = [
    new Student(1, 'User one', 25, 'user1@gmail.com'),
    new Student(2, 'User Two', 30, 'user2@gmail.com'),
    new Student(3, 'User Three', 40, 'user3@gmail.com'),
    new Student(4, 'User Four', 40, 'user4@gmail.com'),
  ];

  newStudent: Student = new Student(0, '', 0, '');
  selectedStudent: Student = new Student(0, '', 0, '');
  updatedStudent: Student = new Student(0, '', 0, '');

  addStudent() {
    this.newStudent.id = this.students.length + 1;
    this.students.push({...this.newStudent});
    this.newStudent = new Student(0, '', 0, '');
  }

  showStudent(student: Student) {
    this.selectedStudent = student;
  }

  updateStudent(student: Student) {
    this.updatedStudent = student;
  }

  deleteStudent(studentId: number) {
    const index = this.students.findIndex(
      (student) => student.id === studentId
    );
    if (index !== -1) {
      this.students.splice(index, 1);
    }
  }

  saveUpdatedStudent() {
    const index = this.students.findIndex(
      (student) => student.id === this.selectedStudent.id
    );

    if (index !== -1) {
      this.students[index] = {...this.selectedStudent};
    }
  }
}

