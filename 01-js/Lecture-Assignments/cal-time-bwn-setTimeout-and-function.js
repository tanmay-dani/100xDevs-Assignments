let startTime = new Date();
function hello(name){
    console.log("Called using Settimout() by  " + name )
    let endTime = new Date();

    let final = endTime - startTime;
    console.log ( " the exact time taken is " + final)
}

setTimeout(hello,1000,"Rajesh")

#learnt to use the Date() 
#took a lot of time to figure out the calucaltion needs to be done inside the fucntion 