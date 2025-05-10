//versione 2.0
console.log("--S-E-P-A-R-A-T-O-R-E--")
for (let i = 1; i <= 100; i++) {  //100 iterazioni
    //calcolo il resto di 3
    const resto3 = i % 3;
    //calcolo il resto di 5
    const resto5 = i % 5;

    //se il resto è 0 sia che per il resto di 3 che di 5 
    if (resto3 === 0 && resto5 === 0) {
        console.log("FizzBuzz")
    } else if (resto3 === 0) {
        console.log("Fizz")
    } else if (resto5 === 0) {
        console.log("Buzz")
    } else { console.log(i) }
}