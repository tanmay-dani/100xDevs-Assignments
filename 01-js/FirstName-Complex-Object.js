–const allUsers = [{
    Fname : "Tanmay" ,
    gender : "Male"
} , {
    Fname : "Rachit" ,
    gender : "Male"
} , {
    Fname : "Punita" ,
    gender : "Female"
}]
let l= allUsers.length;

for (let i=0 ; i<l;i++){
    if (allUsers[i]["gender"] == "Male"){
        console.log(allUsers[i]["Fname"])
    }
}