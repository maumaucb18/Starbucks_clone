
function imgSlider(anything){
 document.querySelector('.starbucks').src = anything;
}

function changeCircleColor(color){
  const Circle = document.querySelector('.circle');
  Circle.style.background = color;
}

function adicionar(){

  let item = document.getElementById("item").value;
  let list = document.getElementById("lista").innerHTML;

  list += "<li>" + item + "<li>"

  document.getElementById("lista").innerHTML=list;







}