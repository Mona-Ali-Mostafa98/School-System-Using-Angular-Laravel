export class Student {
  // Define variables with types
  id: number;
  name: string;
  age: number;
  email: string;
  department: number;

  constructor(id: number, name: string, age: number, email: string, department: number = 0) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.email = email;
    this.department = department;
  }
}
