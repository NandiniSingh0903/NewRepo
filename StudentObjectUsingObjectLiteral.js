// Define student objects using object literals
var student1 = {
    rollno: 101,
    name: "John Doe",
    age: 20,
    marks: [85, 90, 78],
    totalMarks: function () {
      return this.marks.reduce((total, mark) => total + mark, 0);
    },
    grade: function () {
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
    }
  };
  
  var student2 = {
    rollno: 102,
    name: "Alice Smith",
    age: 21,
    marks: [75, 88, 92],
    totalMarks: function () {
      return this.marks.reduce((total, mark) => total + mark, 0);
    },
    grade: function () {
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
    }
  };
  
  var student3 = {
    rollno: 103,
    name: "Bob Johnson",
    age: 22,
    marks: [92, 87, 95],
    totalMarks: function () {
      return this.marks.reduce((total, mark) => total + mark, 0);
    },
    grade: function () {
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
    }
  };
  
  var student4 = {
    rollno: 104,
    name: "Eva Brown",
    age: 19,
    marks: [80, 75, 68],
    totalMarks: function () {
      return this.marks.reduce((total, mark) => total + mark, 0);
    },
    grade: function () {
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
    }
  };
  
  var student5 = {
    rollno: 105,
    name: "Grace Lee",
    age: 20,
    marks: [95, 98, 92],
    totalMarks: function () {
      return this.marks.reduce((total, mark) => total + mark, 0);
    },
    grade: function () {
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
    }
  };
  
  // Display information for each student
  console.log("Student 1:", student1.name, "Roll No:", student1.rollno, "Grade:", student1.grade());
  console.log("Student 2:", student2.name, "Roll No:", student2.rollno, "Grade:", student2.grade());
  console.log("Student 3:", student3.name, "Roll No:", student3.rollno, "Grade:", student3.grade());
  console.log("Student 4:", student4.name, "Roll No:", student4.rollno, "Grade:", student4.grade());
  console.log("Student 5:", student5.name, "Roll No:", student5.rollno, "Grade:", student5.grade());
  