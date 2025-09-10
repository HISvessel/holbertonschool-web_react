interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};

const student1: Student = {
  firstName: "",
  lastName: "",
  age: 0,
  location: ""
};
const student2: Student = {
  firstName: '',
  lastName: '',
  age: 0,
  location: '',
};

const studentList = [student1, student2];

const studentTable = document.createElement('table');
studentTable.insertRow();

const studentName = document.createElement('row');
const studentLoc = document.createElement('row');

const nameListObject = studentList.forEach(student => {
  const name = student.firstName
  const location = student.location
});
