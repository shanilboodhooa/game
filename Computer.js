let botA = document.getElementById("botA");
let botB = document.getElementById("botB");
let botC = document.getElementById("botC");
let botD = document.getElementById("botD");
let botE = document.getElementById("botE");
let botF = document.getElementById("botF");
let botG = document.getElementById("botG");
let botH = document.getElementById("botH");
let botI = document.getElementById("botI");
let ping = new Audio("windows-xp-ding_B_major.wav");
let Home = document.getElementById("Home");
//check win
/*
const checkwin = () =>{
    let boxtext =  document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, 5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]

wins.forEach(e =>{
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
        intu.innerText = boxtext[e[0]].innerText + " WIN";
        document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        document.querySelector(".line").style.width = "22vw"
        //alert("work")
        //alert(boxtext[e[0]].innerText + " WIN")
        //hiddens.hidden = false
        //isgameover = true
        


    }

})
}
    */

const checkwin = () =>{

    if(botA.innerText === botD.innerText && botD.innerText === botG.innerText && botA.innerText === botG.innerText && botA.innerText !== ""){
        intu.innerText =  botA.innerText + " WIN";
        document.querySelector(".line").style.transform = "translate(-5vw, 15vw) rotate(90deg)"
        document.querySelector(".line").style.width = "22vw"
        if(window.matchMedia("(orientation: portrait)").matches){
            document.querySelector(".line").style.transform = `translate(-25vw, 44vw) rotate(90deg)`
            document.querySelector(".line").style.width = "82vw"
        }

    
    }
    //secound colum
    if(botB.innerText === botE.innerText && botE.innerText === botH.innerText && botB.innerText === botH.innerText && botB.innerText !== ""){
        intu.innerText =  botB.innerText + " WIN";
        document.querySelector(".line").style.transform = "translate(5vw, 15vw) rotate(90deg)"
        document.querySelector(".line").style.width = "22vw"
        if(window.matchMedia("(orientation: portrait)").matches){
            document.querySelector(".line").style.transform = "translate(6vw, 44vw) rotate(90deg)"
            document.querySelector(".line").style.width = "82vw"
        }
    }
    
    //three colume
    if(botC.innerText === botF.innerText && botF.innerText === botI.innerText && botC.innerText === botI.innerText && botC.innerText !== ""){
        intu.innerText =  botC.innerText + " WIN";
        document.querySelector(".line").style.transform = "translate(15vw, 15vw) rotate(90deg)"
        document.querySelector(".line").style.width = "22vw"
        if(window.matchMedia("(orientation: portrait)").matches){
            document.querySelector(".line").style.transform = "translate(36vw, 44vw) rotate(90deg)"
            document.querySelector(".line").style.width = "82vw"
        }
    
    }
    //ROW
    //first row
    if(botA.innerText === botB.innerText && botB.innerText === botC.innerText && botA.innerText === botC.innerText && botA.innerText !== ""){
        intu.innerText = botA.innerText + " WIN";
        document.querySelector(".line").style.transform = "translate(5vw, 5vw) rotate(0deg)"
        document.querySelector(".line").style.width = "22vw"
        if(window.matchMedia("(orientation: portrait)").matches){
            document.querySelector(".line").style.transform = "translate(8vw, 8vw) rotate(0deg)"
            document.querySelector(".line").style.width = "82vw"
        }
    
    }
   
    //secound row
    if(botD.innerText === botE.innerText && botE.innerText === botF.innerText && botD.innerText === botF.innerText && botD.innerText !== ""){
        intu.innerText =  botD.innerText + " WIN";
        document.querySelector(".line").style.transform = `translate(5vw, 15vw) rotate(0deg)`
        document.querySelector(".line").style.width = "22vw"
        if(window.matchMedia("(orientation: portrait)").matches){
            document.querySelector(".line").style.transform = `translate(8vw, 38vw) rotate(0deg)`
            document.querySelector(".line").style.width = "82vw"
        }
    
    
    }
    //three row
    if(botG.innerText === botH.innerText && botH.innerText === botI.innerText && botG.innerText === botI.innerText && botG.innerText !== ""){
        intu.innerText =  botG.innerText + " WIN";
        document.querySelector(".line").style.transform = `translate(5vw, 25vw) rotate(0deg)`
        document.querySelector(".line").style.width = "22vw"
        if(window.matchMedia("(orientation: portrait)").matches){
            document.querySelector(".line").style.transform = `translate(8vw, 76vw) rotate(0deg)`
            document.querySelector(".line").style.width = "82vw"
        }
    
    
    }
    //first diagonal
    if(botA.innerText === botE.innerText && botE.innerText === botI.innerText && botA.innerText === botI.innerText && botA.innerText !== ""){
        intu.innerText =  botA.innerText + " WIN";
        document.querySelector(".line").style.transform = `translate(5vw, 15vw) rotate(45deg)`
        document.querySelector(".line").style.width = "22vw"
        if(window.matchMedia("(orientation: portrait)").matches){
            document.querySelector(".line").style.transform = `translate(5vw, 46vw) rotate(45deg)`
            document.querySelector(".line").style.width = "82vw"
        }
    
    
    }
    //secound diagonal
    if(botC.innerText === botE.innerText && botE.innerText === botG.innerText && botC.innerText === botG.innerText && botC.innerText !== ""){
       intu.innerText =  botC.innerText + " WIN";
        document.querySelector(".line").style.transform = `translate(5vw, 15vw) rotate(135deg)`
        document.querySelector(".line").style.width = "22vw"
        if(window.matchMedia("(orientation: portrait)").matches){
            document.querySelector(".line").style.transform = `translate(8vw, 46vw) rotate(135deg)`
            document.querySelector(".line").style.width = "82vw"
        }
    
    
    }


}
//ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
let boxes = document.getElementsByClassName("box");
let boxt = document.getElementsByClassName("boxtext")
Array.from(boxes).forEach(element =>{
let boxt = element.querySelector('.boxtext')
element.addEventListener("click", ()=>{
    if(boxt.innerText == ""){
        boxt.innerText = "X"
    }
    //checkwin()
  

ping.play();
    //bot logic 
   setTimeout(()=>{ if(botA.innerText == "X" && botB.innerText == ""){
        botB.innerText = "O"
    }
   },600)

   setTimeout(()=>{ if(botB.innerText == "X" && botA.innerText == ""){
    botA.innerText = "O"
}
},600)
setTimeout(()=>{ if(botC.innerText == "X" && botD.innerText == ""){
    botD.innerText = "O"
}
},600)
setTimeout(()=>{ if(botD.innerText == "X" && botC.innerText == ""){
    botC.innerText = "O"
}
},600)

setTimeout(()=>{ if(botE.innerText == "X" && botF.innerText == ""){
    botF.innerText = "O"
}
},600)

setTimeout(()=>{ if(botF.innerText == "X" && botE.innerText == ""){
    botE.innerText = "O"
}
},600)
setTimeout(()=>{ if(botG.innerText == "X" && botH.innerText == ""){
    botH.innerText = "O"
}
},600)
setTimeout(()=>{ if(botH.innerText == "X" && botG.innerText == ""){
    botG.innerText = "O"
}
},600)

checkwin()


})

})


/*
let reset = document.getElementById("reset")
reset.addEventListener("click", ()=>{
    let boxet =  document.getElementsByClassName("boxtext");
    

    Array.from(boxet).forEach(element =>{
            element.innerHTML = ""
        
    })

/*boxes.addEventListener("click", ()=>{
    boxt.innerHTML = "X"
    })
  //promblem
  
    if(botA !== ""){

        botA.innerHTML = ""
        botB.innerHTML = ""
        botC.innerHTML = ""
        botD.innerHTML = ""
        botE.innerHTML = ""
        botF.innerHTML = ""
        botG.innerHTML = ""
        botH.innerHTML = ""
        botI.innerHTML = ""
    }
})  

    
*/

    //boxt.innerText = ""
//if(boxt.innerText == ""){
   // boxt.innerText = "X"

     // Get a reference to the button element
     const RESET = document.getElementById("RESET");

     // Add a click event listener to the button
     RESET.addEventListener("click", function() {
         // Reload the page when the button is clicked
         location.reload();
     });
    Home.addEventListener("click", ()=>{
        location.href = "index.html"
    })
