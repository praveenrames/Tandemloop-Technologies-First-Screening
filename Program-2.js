
// Problem - 2 : With a single integer as the input, generate the following until a = x [series of numbers as shown in below examples]

// Output: (examples)
// 1) input a = 1, then output : 1
// 2) input a = 2, then output : 1, 3
// 3) input a = 3, then output : 1, 3, 5
// 4) input a = 4, then output : 1, 3, 5, 7

// solution

function GenerateNumber (a) {
    
    let result = [];  // Create an empty array to store the generated numbers

    for (let i=0; i<a; i++){      // Loop 'a' times (from 0 to a-1)
       result.push(1 + (i * 2));  
    }

    return result; // Return the final array
}

let a = 1; 
console.log(GenerateNumber(a));




