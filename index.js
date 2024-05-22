window.onload=()=>{
    // alert("Welcome to DOM!!")
    console.log("welcome to DOM");
};
document.getElementById('demo').onclick=()=>{
    document.getElementById('demo').innerHTML="Yayy changed!!";
    document.getElementById('demo').style.backgroundColor= 'skyblue';
};

const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

document.getElementsByClassName('time')[0].innerHTML= "Time Now = "+ hours+" hours : "+minutes + " minutes";

document.getElementsByClassName('date')[0].innerHTML="Date = "+ now.getDate()+"/"+now.getMonth()+"/"+now.getFullYear();

document.getElementById('input_number').onclick = () => {
    let x = document.getElementById('number').value;
    let Output_Text;
    if (isNaN(x) || x < 1 || x > 10) {
        Output_Text = "❌ Invalid Input";
    } else {
        Output_Text = "✅ Input Valid";
    }
    document.getElementById("validation").innerHTML = Output_Text;
};

function myMove() {
    let id = null;
    const elem = document.getElementById("animate");   
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top =  pos + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
  }

function upperCase() {
    const x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
    x.style.backgroundColor='skyblue'
}

const hoverElement = document.getElementById('hover');

hoverElement.onmouseover = () => {
    hoverElement.querySelector('h3').innerHTML = "Remove Mouse now";
    hoverElement.style.backgroundColor='cyan';
};

hoverElement.onmouseout = () => {
    hoverElement.querySelector('h3').innerHTML = "Try Hovering Again";
    hoverElement.style.backgroundColor='lightpink';
};

const clickedElement= document.getElementById('click');

clickedElement.onmousedown =()=>{
    clickedElement.querySelector('h3').innerHTML= "Release Now";
    clickedElement.style.backgroundColor='lightpink';
}
clickedElement.onmouseup =()=>{
    clickedElement.querySelector('h3').innerHTML= "Click again";
    clickedElement.style.backgroundColor='cyan';
}

function alerting(){
    alert("Event Listner has been added");
}
document.getElementById('eventlistener').addEventListener('click',alerting);
