function foo(a, b) {
  // Explicitly check for null or undefined using strict equality
  if (a === null || b === null || a === undefined || b === undefined) {
    return 0;
  }
  //Check if the parameters are numbers
  if(typeof a !== 'number' || typeof b !== 'number'){
    return 0; //Handle non-numeric values
  }
  return a + b;
}