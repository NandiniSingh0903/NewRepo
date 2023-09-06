// Define a Student constructor function
function Student(rollno, name, age, marks) {
    this.rollno = rollno;
    this.name = name;
    this.age = age;
    this.marks = marks;
}

// Add methods to the Student prototype for totalMarks and grade
Student.prototype.totalMarks = function () {
    return this.marks.reduce((total, mark) => total + mark, 0);
};

Student.prototype.grade = function () {
    var average = this.totalMarks() / this.marks.length;
    if (average >= 90) {
        return 'A';
    } else if (average >= 80) {
        return 'B';
    } else if (average >= 70) {
        return 'C';
    } else {
        return 'D';
    }
};

// Create 5 Student objects
var student1 = new Student(101, "John Doe", 20, [85, 90, 78]);
var student2 = new Student(102, "Alice Smith", 21, [75, 88, 92]);
var student3 = new Student(103, "Bob Johnson", 22, [92, 87, 95]);
var student4 = new Student(104, "Eva Brown", 19, [80, 75, 68]);
var student5 = new Student(105, "Grace Lee", 20, [95, 98, 92]);

// Display information for each student
console.log("Student 1:", student1.name, "Roll No:", student1.rollno, "Grade:", student1.grade());
console.log("Student 2:", student2.name, "Roll No:", student2.rollno, "Grade:", student2.grade());
console.log("Student 3:", student3.name, "Roll No:", student3.rollno, "Grade:", student3.grade());
console.log("Student 4:", student4.name, "Roll No:", student4.rollno, "Grade:", student4.grade());
console.log("Student 5:", student5.name, "Roll No:", student5.rollno, "Grade:", student5.grade());



//Difference between Specific and Generic Approach:
/*Specific Objects (Instances):
    * Specific objects are instances created from a constructor function, like student1, student2, etc., in the example above.
    * They have their own unique properties (e.g., rollno, name, age, marks) assigned during object creation.
    * Methods are shared through the prototype, so multiple instances can reuse the same methods without duplicating the code.
    * Specific objects are tailored to a particular type or class and contain data specific to that instance.
*/

/*
Generic Objects (Prototype):
    * Generic objects are created using a constructor's prototype. In the example, Student.prototype is a generic object.
    * They hold methods and properties that can be shared among all instances created from the constructor function.
    * They are not instances themselves and do not have unique data.
    * Generic objects are used to define common behaviors that are shared across multiple instances of a particular class (constructor function).
*/