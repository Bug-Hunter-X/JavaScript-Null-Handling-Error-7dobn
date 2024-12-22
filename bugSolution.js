function foo(a, b) {
  // Handle null values using the nullish coalescing operator (??) 
  a = a ?? 0;
  b = b ?? 0;
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0

//Alternative solution using if statement:
function foo2(a,b){
  if(a === null) a = 0;
  if(b === null) b = 0;
  return a + b;
}
console.log(foo2(1,2)); //Output: 3
console.log(foo2(null,2)); //Output: 2
console.log(foo2(1, null)); //Output: 1
console.log(foo2(null, null)); //Output: 0