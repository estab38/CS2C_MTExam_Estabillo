let DSA = [];
let PL = [];
let Networks = [];

function enrollStudent(subjectArray, studentName) {
  subjectArray.push(studentName);
  console.log(`${studentName} enrolled in ${subjectArray.length} position.`);
}

function unenrollStudent(subjectArray) {
  console.log("Currently Enrolled Students:");
  subjectArray.forEach((student, index) => {
    console.log(`${index + 1}. ${student}`);
  });

  const studentNameToRemove = prompt("Enter the name of the student to unenroll:");
  const indexToRemove = subjectArray.indexOf(studentNameToRemove);

  if (indexToRemove !== -1) {
    subjectArray.splice(indexToRemove, 1);
    console.log(`${studentNameToRemove} unenrolled successfully.`);
  } else {
    console.log("Student not found.");
  }
}

function selectSubject() {
  const subjectChoice = prompt("Select a subject:\n(A) DSA\n(B) PL\n(C) Networks");

  switch (subjectChoice.toUpperCase()) {
    case "A":
      return DSA;
    case "B":
      return PL;
    case "C":
      return Networks;
    default:
      console.log("Invalid subject choice.");
      return selectSubject();
  }
}

function selectOperation(subjectArray) {
  const operationChoice = prompt("Select an operation:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit");

  switch (operationChoice.toUpperCase()) {
    case "A":
      const studentName = prompt("Enter the name of the student to enroll:");
      enrollStudent(subjectArray, studentName);
      break;
    case "B":
      unenrollStudent(subjectArray);
      break;
    case "C":
      selectSubject();
      break;
    case "D":
      console.log("DSA Enrolled Students:", DSA);
      console.log("PL Enrolled Students:", PL);
      console.log("Networks Enrolled Students:", Networks);
      process.exit();
    default:
      console.log("Invalid operation choice.");
  }
}

const initialSubject = selectSubject();
selectOperation(initialSubject);
