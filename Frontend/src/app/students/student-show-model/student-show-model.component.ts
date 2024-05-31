import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {StudentService} from "../../_services/student.service";
import {Student} from "../../_models/student";

@Component({
  selector: 'app-student-show-model',
  standalone: true,
  imports: [CommonModule, FormsModule, ],
  templateUrl: './student-show-model.component.html',
  styleUrls: []
})

export class StudentShowModelComponent {
  constructor(public studentService: StudentService) {}

  @Input() selectedStudent: Student = new Student(0, '', 20, '');
}
