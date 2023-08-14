let confirmMsg = confirm("Are you ready to login?")
console.log(confirmMsg)
if (confirmMsg===true){
    alert("welcome sir")

}
else{
    console.log("refused")
}
function login(){
    swal({
        title: "Log is done!",
        text: "Thank you",
        icon: "success",
        button: "Done!",
      });
    
}