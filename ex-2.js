//Exercise #2: At Least Five Function

function atLeastFive(array, roomNo, operation) {
  let countMoreThan70 = 0;
  for(let item of array) {
    if(countMoreThan70 >= 5) {
      return `นักเรียนห้องที่ ${roomNo} ผ่านเกณฑ์ ✅`;
    }
    if(operation(item)) {
      countMoreThan70++;
    }
  }
  return `นักเรียนห้องที่ ${roomNo} ไม่ผ่านเกณฑ์ ❌`;
}

function checkStudentsScores(score) {
  if(score > 71) {
    return true;
  } else if (score <= 70) {
    return false;
  }
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1,1,checkStudentsScores);
let scoreRoom2Result = atLeastFive(studentScoresRoom2,2,checkStudentsScores);
let scoreRoom3Result = atLeastFive(studentScoresRoom3,3,checkStudentsScores);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);