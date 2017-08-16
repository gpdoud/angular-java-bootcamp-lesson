import { Component, OnInit, Input } from '@angular/core';

import { Student } from '../student';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  author: string = "Greg";

  selectedStudent: Student;

  getSelectedStudent(student: Student) : void {
  	this.selectedStudent = student;
  }

  displaySelectedStudent(): void {
  	console.log("Selected student is", this.selectedStudent.name);
  }

  students: Student[] = [
  	new Student("Kim", "Green", 10),
  	new Student("Long", "Blue", 11),
  	new Student("Elisha", "Yellow", 3),
  	new Student("Phuc", "Black", 8),
  	new Student("Eric", "Blue", 4)
  ];

  nameOfStudent(name: string): void {
  	console.log("clicked on", name);
  }

  clickme(): void {
  	console.log("The button was clicked!");
  }

  constructor() { }

  ngOnInit() {
  }

}
