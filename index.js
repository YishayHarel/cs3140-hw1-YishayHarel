// Homework 1: JavaScript Fundamentals
// Name: Yishay Harel
// Date: 2/1/2026

// ============ PART 1: ARRAY FUNCTIONS ============
const numbers = [10, 5, 8, 12, 3, 7, 15, 2, 9, 6];

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

function average(arr) {
  return sum(arr) / arr.length;
}

function min(arr) {
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

function max(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

// ============ PART 2: STRING FUNCTIONS ============
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverse(str) {
  return str.split("").reverse().join("");
}

function countVowels(str) {
  let count = 0;
  const vowels = "aeiou";
  const lower = str.toLowerCase();

  for (let i = 0; i < lower.length; i++) {
    if (vowels.includes(lower[i])) {
      count++;
    }
  }
  return count;
}


// ============ TEST YOUR CODE ============
console.log("=== Part 1: Arrays ===");
console.log("Numbers:", numbers);
console.log("Sum:", sum(numbers));       // 77
console.log("Average:", average(numbers)); // 7.7
console.log("Min:", min(numbers));       // 2
console.log("Max:", max(numbers));       // 15

console.log("\n=== Part 2: Strings ===");
console.log("capitalize('hello'):", capitalize("hello")); // Hello
console.log("reverse('hello'):", reverse("hello"));       // olleh
console.log("countVowels('hello'):", countVowels("hello")); // 2
