// Create an array of strings called names. Fill it with five or six names.

let names:string [] = ['Thomas', 'William', 'Paul', 'George', 'Stanley' ]; 
// Write a forEach function. Put the function it calls right in the forEach directly. The function should print out a welcome message:
//  such as "Welcome Fred!". (Remember, to do this you can use the “back-tick” like so: `Welcome ${name}!`


names.forEach(function(name: string) {
    console.log(`Welcome ${name}`); 
}

);