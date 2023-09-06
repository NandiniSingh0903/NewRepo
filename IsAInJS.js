// Create a Person Function , Having Id, Name, Age, City
// Create a Student Function , Having Marks, Grade, College
// Create a Employee Function. Having Salary, Bonus, CompanyName
// Make a RelationShip b/w Employee , Student and 
// By Using proto​​ and prototype
// Hint : Use Call 
// Think about how Chain RelationShip (Inheritance) and One Function Constructor call another Function Constructor like super constructor call.

function Person(id, name, age, city){
    this.id = id;
    this.name = name;
    this.age = age;
    this.city = city;
}

function Student(id, name, age, city, marks, grade, college){
    Person.call(this, id, name, age, city); 
    this.marks = marks;
    this.grade = grade;
    this.college = college;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

function Employee(id, name, age, city, salary, bonus, companyName){
    Person.call(this, id, name, age, city);
    this.salary = salary;
    this.bonus = bonus;
    this.companyName = companyName;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

const person = new Person(101, "Min", 30, "Los Angeles");
const student = new Student(102, "Kim", 27, "Philippines", 97, "A+", "YK College");
const emp = new Employee(103, "Eric", 25, "Washington DC", 75000, 15500, "Google");

console.log(person);
console.log(student);
console.log(emp);
    
