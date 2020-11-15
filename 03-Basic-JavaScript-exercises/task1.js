// Task 1.1
const firstTaskPrintArray = (arr) => {
  for (let item of arr) {
    console.log(item);
  }
}

// Task 1.2
const secondTaskMapMultiplied = (arr) => {
  return arr.map(x => x * 2);
}

// Task 1.3
const thirdTaskFilterEven = (arr) => {
  return arr.filter(number => number % 2 === 0);
}

// Task 1.4
const fourthTaskCheckHasLowerThanTen = (arr) => {
  return arr.some((el)=> el < 10);
}

// Task 1.5
const fifthTaskFilterDividableByThree = (arr) => {
  return arr.filter(number => number % 3 === 0);
}

// Task 1.6
const sixthTaskSumNumbers = (arr) => {
  return arr.reduce((sum, val) => sum + val);
}

// Task 1.7
const seventhTaskSliceLastTwo = (arr) => {
  return arr.slice(-2);
}


// Main
const arrayA = [10, 5, 13, 18, 51];

firstTaskPrintArray(arrayA);

const arrayB = secondTaskMapMultiplied(arrayA);
console.log(arrayB);  // [20, 10, 26, 36, 102]

const evens = thirdTaskFilterEven(arrayA);
console.log(evens);  // [10, 18]

const hasLowerThanTen = fourthTaskCheckHasLowerThanTen(arrayA);
console.log(hasLowerThanTen);  // true
const doesNotHaveLowerThanTen = fourthTaskCheckHasLowerThanTen(arrayB);
console.log(doesNotHaveLowerThanTen);  // false

const dividableByThree = fifthTaskFilterDividableByThree(arrayA);
console.log(dividableByThree);  // [18]

const sum = sixthTaskSumNumbers(arrayA);
console.log(sum);  // 97


const lastTwo = seventhTaskSliceLastTwo(arrayA);
console.log(lastTwo);  // [18, 51]
