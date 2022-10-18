// Create an array of numbers. Fill it with five or six numbers.
// Create a variable of type number called sum.
// Try to create a forEach function that sums up the numbers. 
// Remember, the function you pass to forEach will get called for each number in the array.
// Print out the sum

let numbers: number [] = [5, 10, 15, 20, 25, 30]; 
let sum: number = 0; 

numbers.forEach(
    (number: number) => {
        sum += number;
    }
); 

console.log(sum);