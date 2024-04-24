function clock ()
{
    let a = new Date()
    let hour = a.getHours()
    let minutes = a.getMinutes()
    let seconds = a.getSeconds()

    console.log(hour + ":" + minutes + ":" + seconds );
}
setInterval(clock,1000)

// used the Get Hours/minutes/seconds to get the exact time in the required format
// Learnt to use the setInterval in detail