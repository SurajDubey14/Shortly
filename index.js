function scrolltop(){
    const head = document.querySelector(".head");
    head.scrollIntoView({behavior:'smooth'});
}

let hamburger = document.querySelector('.hamburger');
let demoNav = document.querySelector('#menu')
// let Menu = document.getElementsByTagName("main")
let flag = 0

hamburger.addEventListener('click', () => {
    if (flag == 0) {
        demoNav.style.display = 'block';
        flag = 1
    }
    else {
        demoNav.style.display = 'none'
        flag = 0
    }

})
// const getdata = () => {
//     return new Promise((resolve  , reject) => {
//         let a= prompt("Enter  1 and 2")
//         if(a == 1) resolve("Hello")
//         else reject("Sorry")
//     })
// }

// getdata().then((message)=>{
//     console.log(message)
// }).catch((error)=> {
//     console.log(error);
// } )