const factorial = n => 
  n<0
    ? (() => {throw new Error("Negative number")})()
    : n <= 1
      ? 1
      : n * factorial(n-1);

  console.log( 'factorial(1)', factorial(1) );
  console.log( 'factorial(56)', factorial(56) );
  console.log( 'factorial(-4)', factorial(-4) );