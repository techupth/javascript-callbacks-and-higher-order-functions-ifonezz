// Exercise #1: For Each Function

function forEach(array, operation) {
  let result = [];
  for(let item of array) {
    result.push(operation(item));
  }
  return result;
}

function addEmployeeSalaries(num) {
  return num + 5000;
}



const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
let newEmployeeSalaries = [];

newEmployeeSalaries = forEach(employeeSalaries,addEmployeeSalaries);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
