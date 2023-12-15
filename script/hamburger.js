document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("burger").addEventListener("click", function(){
        document.querySelector(".header").classList.toggle("open")
        document.querySelector(body).classList.toggle("no-scroll");
        // let phone = document.getElementsByClassName("phone-ham");
        // let head = document.getElementById("hood");
        // if(head.classList.contains("open")){
        //     phone.classList.add('wht');
        // } else console.log("no.");
        
    }
    
    )
})

// let phone = document.getElementsByClassName("phone--ham");
// let burh = document.getElementById("burger");
// let header = document.getElementsByClassName("header");
// let head = document.getElementById("hood");
// document.addEventListener("DOMContentLoaded", function(){
//     function checkPhone(){
//         if(head.classList.contains("open")){
//             phone.classList.toggle("wht");
//         } else console.log("no.");
//         checkPhone();
//     }
// })



