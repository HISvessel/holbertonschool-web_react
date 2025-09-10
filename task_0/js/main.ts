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
} ;
const student2: Student = {
  firstName: '',
  lastName: '',
  age: 0,
  location: '',
};

const studentList = [student1, student2];

studentList.forEach(student => {
  student.firstName,
  student.location
});
