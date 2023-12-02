console.log("welcome to TIC TAC TOA");
let botA = document.getElementById("botA");
let botB = document.getElementById("botB");
let botC = document.getElementById("botC");
let botD = document.getElementById("botD");
let botE = document.getElementById("botE");
let botF = document.getElementById("botF");
let botG = document.getElementById("botG");
let botH = document.getElementById("botH");
let botI = document.getElementById("botI");
let intu = document.getElementById("intu");
let Home = document.getElementById("Home");
let gameover = new Audio("mixkit-arcade-game-over-1949.wav");
let ping = new Audio("windows-xp-ding_B_major.wav");
let turn = "X"
let isgameover = false
let hiddens = document.getElementById("hiddens")

hiddens.hidden = true
//let n = document.getElementsByClassName("newin")
//function to change turn
const changeturn = () =>{
    return turn === "X"?"O" : "X"
}
//function to check a win
const checkwin = () =>{
    let boxtext =  document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2, 5, 5, 0 ,8,8,0],//first row
        [3, 4, 5, 5, 15, 0,8,38,0],//2 row
        [6, 7, 8, 5, 25, 0,8,76,0],//3 row
        [0, 3, 6, -5, 15, 90,-25,44,90],//1 colume
        [1, 4, 7, 5, 15, 90,6,44,90],//2 colume
        [2, 5, 8, 15, 15, 90,36,44,90],//3 colume
        [0, 4, 8, 5, 15, 45,5,46,45],
        [2, 4, 6, 5, 15, 135,5,46,135],
    ]

wins.forEach(e =>{
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
        intu.innerText = boxtext[e[0]].innerText + " WIN";
        //alert(boxtext[e[0]].innerText + " WIN")
        hiddens.hidden = false
        isgameover = true
        
        document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        document.querySelector(".line").style.width = "22vw"
        if(window.matchMedia("(orientation: portrait)").matches){
            document.querySelector(".line").style.transform = `translate(${e[6]}vw, ${e[7]}vw) rotate(${e[8]}deg)`
            document.querySelector(".line").style.width = "82vw"
        }
        


    }
    //if(window.matchMedia("(orientation: portrait)").matches){
        //document.querySelector(".line").style.width = "0"
       // document.querySelector(".box").style.border = "2px solid white"
       // document.querySelector(".box").style.fontsize == "10vw"

    //}

})
}
//game logic
let boxes = document.getElementsByClassName("box")
    
Array.from(boxes).forEach(element =>{
 let boxt = element.querySelector(".boxtext")
element.addEventListener('click', ()=>{
    if(boxt.innerText === ""){
        boxt.innerText = turn;
        //boxt[4].innerText = "x"?"o" : "x";
       turn =  changeturn();
        ping.play(); 
        checkwin();
    }
    if(isgameover === false){
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
}
    
   
    
    })

    })




    ////turn = "X";
    //isgameover = false
    

//bot logic
//let boxtext = document.getElementsByClassName("boxtext")
/*
Array.from(boxes).forEach(element =>{
    let boxt = element.querySelector(".boxtext");
    boxt.addEventListener("mouseover", ()=>{
        if(botA.innerText == "X" ){
            botB.innerText = "O"
            turn = "X"
        }
    })
})
*/
let reset = document.getElementById("reset")
reset.addEventListener("click", ()=>{
    let boxtexts =  document.getElementsByClassName("boxtext");
    Array.from(boxtexts).forEach(element =>{
        element.innerHTML = ""
        
    })
    document.querySelector(".line").style.width = "0"
    hiddens.hidden = true
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    



           

})
Home.addEventListener("click", ()=>{
    location.href = "index.html"
})
