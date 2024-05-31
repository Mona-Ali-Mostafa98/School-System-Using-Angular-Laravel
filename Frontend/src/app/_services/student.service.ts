import { Injectable } from '@angular/core';
import {Student} from "../_models/student";

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  private students:Student[] = [
    new Student(1, 'User one', 25, 'user1@gmail.com'),
    new Student(2, 'User Two', 30, 'user2@gmail.com'),
    new Student(3, 'User Three', 40, 'user3@gmail.com'),
    new Student(4, 'User Four', 40, 'user4@gmail.com'),
  ];

  public selectedStudent: Student = new Student(0, '', 20, '');
  public updatedStudent: Student = new Student(0, '', 20, '');

  getAllStudents(){
    return this.students
  }

  addStudent(newStudent:Student):void {
    newStudent.id = this.students.length + 1;
    this.students.push({...newStudent});
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
      (student) => student.id === this.updatedStudent.id
    );

    if (index !== -1) {
      this.students[index] = {...this.updatedStudent};
    }
  }

  constructor() {}
}
