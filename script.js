function slide(num){
    var slider_container = document.querySelector(".slider-container")
slider_container.style.width = ''
 
var slider_box = document.querySelectorAll(".slider-container>ul>li")
var width = 0 ;
for(i = 0 ;i <num ; i++){
    width += slider_box[i].offsetWidth 
}
width += parseInt(getComputedStyle(slider_box[0]).marginRight) * (num-1);

console.log(width)
slider_container.style.width  = width+'px'
}
slide(8);