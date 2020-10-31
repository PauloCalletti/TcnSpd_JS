function tabu(num, times) {
  let i = 0;
  for(i = 0; i <= times; i++) {
  result = num * i;
  console.log(num + " X " + i + " = " + result)
  }
}
console.log(tabu(5, 11))