let counter = 5
const intervalID = setInterval(()=> {
    console.log(counter)
    counter --;
    if (counter < 0) {
process.exit() 
    }
}, 1000)