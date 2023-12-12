document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("burger").addEventListener("click", function(){
        document.querySelector(".header").classList.toggle("open");
        
    }
    
    )
})
let phone = document.querySelector('.phone--ham');
let burh = document.getElementById("burger");
let header = document.querySelector(".header");
function checkPhone(){
    if(header.classList.contains('open')){
        phone.style.color = 'white';
    } else console.log('no.');
}
checkPhone();