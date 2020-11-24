//Write a JavaScript program to check the total marks of a student in various examinations.
// The student will get A+ grade if the total marks are in the range 89..100 inclusive,
// if the examination is "Final-exam." the student will get A+ grade and total marks must be
// greater than or equal to 90. Return true if the student get A+ grade or false otherwise

function exam_status(marks, is_exam) {
  if (is_exam) {
    return marks >= 90;
  }
  return marks >= 89 && marks <= 100;
}
console.log(exam_status(89, 'true'));
console.log(exam_status(89, ''));
console.log(exam_status(99, 'true'));
