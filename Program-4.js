
// Problem - 4 : Get the total count of number listed in the dictionary which is multiple of [1,2,3,4,5,6,7,8,9]

//  input: [1,2,8,9,12,46,76,82,15,20,30]
  
// Output: {1: 11, 2: 8, 3: 4, 4: 4, 5: 3, 6: 2, 7: 0, 8: 1, 9: 1}

// solution

let arr = [1,2,8,9,12,46,76,82,15,20,30];

let result = {};  // Create an empty object to store final results

for (let i=1; i<=9; i++){  // Loop from 1 to 9 (because we need to check multiples of 1 to 9)

    let count = 0;

    // Loop through each number in the array
    for (let num of arr){
        if (num % i === 0){ // Check if array number is divisible by i
            count ++;
        }
    }

    result[i] = count;  // Store the count in the result object
}

console.log(result);