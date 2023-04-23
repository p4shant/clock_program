
let mylabel=document.getElementById("mylabel");

update();

setInterval(update,1000);

function update(){

    let date=new Date();
    mylabel.innerHTML=formatTime(date);

    function formatTime(date){
        let hour=date.getHours();
        let minute=date.getMinutes();
        let second=date.getSeconds();
        let amorpm= hour>=12 ? "PM" : "AM";

        hour=(hour%12) || 12;

        return `${hour}:${minute}:${second}:${amorpm}`
    }
}