let printTime2 = () => {
    console.log(new Date());
}

setInterval(
    () => {
        printTime2(); 
    }, 5000
); 
