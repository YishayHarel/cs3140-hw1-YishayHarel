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
  