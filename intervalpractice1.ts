//Create a function called printTime that prints out the current time 
// setInterval(Date, 5000); 

    let printTime = () => {
        console.log(new Date());
    }

    
    setInterval(printTime, 5000); 