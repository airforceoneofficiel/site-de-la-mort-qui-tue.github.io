document.onmousemove = suitsouris;


var btn = document.querySelector('input');

btn.addEventListener('mouseenter', myFunction);

function suitsouris(evenement) {

  var x = evenement.pageX;
  var y = evenement.pageY;
  
  document.getElementById("image_suit_souris").style.left = (x + 1) + 'px';
  document.getElementById("image_suit_souris").style.top = (y + 1) + 'px';
}

let screenwidth = window.innerWidth;

 function myFunction(){
  
  let a = Math.floor(Math.random() * screenwidth ) + 1;
  let b = Math.floor(Math.random() * 500 ) + 1;
  
  btn.style.left = a +"px";
  btn.style.top = b +"px";

  console.log(a + b)
  
}