console.log(1);
setTimeout(() => {
    console.log(2)
}, 3500);;
console.log(3);
const num1 = prompt("Type A Number", "15");
alert(parseFloat(num1) + 250)
const isShow = confirm("Wanna Show your web location?");
if(isShow){
    console.log(location.href)
}
else{
    console.log("Muri")
}