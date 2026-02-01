//Part 1
function sum(arr) {
    return arr.reduce((total, n) => total + n, 0);
  }
  
  function average(arr) {
    return sum(arr) / arr.length;
  }
  
  function min(arr) {
    return Math.min(...arr);
  }
  
  function max(arr) {
    return Math.max(...arr);
  }
  
  //Part 2
  function capitalize(str) {
    if (str.length === 0) return str;
    return str[0].toUpperCase() + str.slice(1);
  }
  
  function reverse(str) {
    return str.split("").reverse().join("");
  }
  
  function countVowels(str) {
    const vowels = "aeiou";
    return str
      .toLowerCase()
      .split("")
      .filter(ch => vowels.includes(ch)).length;
  }
  
