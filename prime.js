const isPrime = num => {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }
const primeRange = (num1, num2) => {
    let range = []
    let prime = []
    for (let i = num1; i <= num2; i++) {
        range.push(i)
    }
    range.forEach(num => {
        if (isPrime(num)) {
            prime.push(num)
        }
    })
    console.log(prime)
    return prime
}
primeRange(1, 10)