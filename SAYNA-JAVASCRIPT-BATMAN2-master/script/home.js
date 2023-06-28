
let formulaire = document.querySelector('form');
formulaire.addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('modal').style.display = 'flex';
});
let body = document.querySelector('body');
body.onclick = function() {
    document.getElementById('modal').style.display = 'none';
}
//slider image2
var imgBat11 =['./img/Illustrations/Batslider1.png','./img/Illustrations/Batslider2.png','./img/Illustrations/Batslider3.png','./img/Illustrations/Batslider4.png',
'./img/Illustrations/Batslider4.png','./img/Illustrations/Batslider5.png',
'./img/Illustrations/Batslider6.png','./img/Illustrations/Batslider7.png',
'./img/Illustrations/Batslider8.png','./img/Illustrations/Batslider9.png','./img/Illustrations/Batslider10.png'];

var i = 0;
function slideShow() {
  document.getElementById("imgBat11").src= imgBat11[i];
   if(i< imgBat11.length-1){
     i++;
   }
   else {
    i=0;
   }
   setTimeout("slideShow()" ,2000);
}
window.onload = slideShow
