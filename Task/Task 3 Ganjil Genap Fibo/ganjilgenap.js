let awal = 1, batas = 100

// Ganjil
for (awal; awal <= 100; awal++)
    if (awal %2 != 0) {
        console.log(awal);
    }

// Genap
for (awal; awal <= 100; awal++)
    if (awal %2 == 0) {
        console.log(awal);
    }

class Fibonacci {
    constructor(n) {
        this.n = n
    }

    output() {
        let result = [];
        let fn = 1;
        let fn_1 = 1;
        let fn_2 = 0;
        
        for (let i = 0; i < this.n; i++) {
            result.push(fn);
            fn = fn_1 + fn_2;
            fn_2 = fn_1;
            fn_1 = fn; 
        }

        return result;
       
    }
}

const data = new Fibonacci(11);
console.info(data.output());