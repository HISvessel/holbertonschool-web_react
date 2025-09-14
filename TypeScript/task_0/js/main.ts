interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};

const student1: Student = {
  firstName: "Joseph",
  lastName: "Gleason",
  age: 32,
  location: "Holberton School"
};
const student2: Student = {
  firstName: 'Jean',
  lastName: 'Carrion',
  age: 24,
  location: 'Holberton School',
};

const studentList: Array<Student> = [student1, student2];

const studentTable: HTMLTableElement = document.createElement('table');
const tableBody: HTMLTableSectionElement = document.createElement('tbody');

const headerRow: HTMLTableRowElement = document.createElement('tr');
const studentName: HTMLTableCellElement = document.createElement('th');
const studentLoc: HTMLTableCellElement = document.createElement('th');

studentName.textContent = 'First Name';
studentLoc.textContent = 'Location';

headerRow.appendChild(studentName);
headerRow.appendChild(studentLoc);

studentTable.appendChild(headerRow);

studentList.forEach((student: Student) => {
  const row: HTMLTableRowElement = document.createElement('tr');
  const name: HTMLTableCellElement = document.createElement('td');
  const location: HTMLTableCellElement = document.createElement('td');


  name.textContent = student.firstName;
  location.textContent = student.location;

  row.appendChild(name);
  row.appendChild(location);
  tableBody.appendChild(row);
});

studentTable.appendChild(tableBody);
document.appendChild(studentTable);
