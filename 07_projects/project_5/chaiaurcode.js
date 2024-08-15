// generate random color 

const randomcolor = function(){
    let hex = '0123456789ABCDEF';
    let color =  '#';
    for (let i = 0; i <6; i++) {
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}
let start ;

const startchangingcolor=function(){
    if (!start) {
        start = setInterval(changeBGcolor,1000);   
    }
    

function changeBGcolor (){
    document.body.style.backgroundColor=randomcolor();
}
}

document.querySelector('#start').addEventListener('click',startchangingcolor) 

const stopchangingcolor = function(){
clearTimeout(start)
start = null;

}

document.querySelector('#stop').addEventListener('click',stopchangingcolor)  