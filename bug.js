function foo(a, b) {
  if (a === null || b === null) {
    return 0; // intended behavior
  }

  return a + b; // potential error here
}