
// Program - 3 : With a single integer as the input, generate the following until a = x [series of numbers as shown in below examples]

//  Output: (examples)
//     1) input a = 1, then output : 1
//     2) input a = 2, then output : 1
//     3) input a = 3, then output : 1, 3, 5
//     4) input a = 4, then output : 1, 3, 5
//     5) input a = 5, then output : 1, 3, 5, 7, 9
//     6) input a = 6, then output : 1, 3, 5, 7, 9

function GenerateNumber (a) {
     
    let result = []; // Create an empty array to store odd numbers

    for (let i=0; i<=a; i++){  // Loop from 0 up to 'a' (inclusive)
         
        // An odd number gives remainder 1 when divided by 2
        if (i % 2 !== 0){    
            result.push(i);  // If 'i' is odd, add it to the result array
        }
    }

    return result;
}

const a = 9;
console.log(GenerateNumber(a));

