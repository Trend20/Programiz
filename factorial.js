// Problem: Find the factorial of n
function factorial(n){
  let fact = 1;
  for(let v = 1; v<=n; v++){
    fact = fact * v;
  }
  return fact;
}

// Finding he sum of numbers in a range of 0 - 1000

function findSum(){
  let sum = 0;

  for(let i = 0; i<= 1000; i++){
    sum += i;
  }
  return sum;
}