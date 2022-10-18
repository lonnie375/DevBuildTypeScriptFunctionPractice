// There’s another function similar to setInterval called setTimeout which waits the designated amount of time and runs the function only once. The format is the same:
// setTimeout(function, milliseconds);
// Call setTimeout passing a function directly in (without creating the function separately) and a timeout of 3000. The function should print the word "Hello".


setTimeout(function() {
    console.log('Hello');
}, 3000); 