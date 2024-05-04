let changeusername=prompt("Enter Your Username");

document.querySelector('#username').innerHTML=changeusername;
//

let uscore=0;
let cscore=0;

uscorescore=document.querySelector(".uscorepara");
cscorescore=document.querySelector(".cscorepara");
//

////////////////
let choices= document.querySelectorAll(".box22");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
          const selected= choice.getAttribute("id");
          playgame(selected);
          document.querySelector("#selectedchoice").innerHTML=(selected);
          //
          const computerchoice= compchoice();
          document.querySelector("#autochoice").innerHTML=(computerchoice);
    });
});

const compchoice=()=>{
    const options=["stone","paper","scissor"];
    const randomid= Math.floor(Math.random()*3);
    return options[randomid];
}
let msg= document.querySelector(".message"); 


const showwinner=(userwin,selected,computerchoice)=>{
  
    if(userwin){
        uscore++;
        uscorescore.innerHTML=uscore;
        
const showwinner=(userwin,selected,computerchoice)=>{
  
    if(userwin){
        uscore++;
        uscorescore.innerHTML=uscore;
        console.log("You Won");
        msg.innerHTML=`You Won. Your ${selected} beats ${computerchoice}`;
    }
    else{
        console.log("You Lose");
        cscore++;
        cscorescore.innerHTML=cscore;
        msg.innerHTML=`You Lose. ${computerchoice} beats ${selected}`;
    }
   
}

        console.log("You Won");
        msg.innerHTML=`You Won. Your ${selected} beats ${computerchoice}`;
    }
    else{
        console.log("You Lose");
        cscore++;
        cscorescore.innerHTML=cscore;
        msg.innerHTML=`You Lose. ${computerchoice} beats ${selected}`;
    }
   
}

const draw= ()=>{
    console.log("Match has Draw");
    msg.innerHTML="Match Draw Play Again !";
}

const playgame= (selected)=>{
    console.log("User Choice= ",selected);
    const computerchoice= compchoice();
    console.log("Computer choice= ",computerchoice);
   

    if(selected==computerchoice){
        draw();
    }else{
        let userwin=true;
        if(selected==="stone"){
            userwin= computerchoice==="paper"?false:true;
        }else  if(selected==="paper"){
            userwin= computerchoice==="scissor"?false:true;
        }else{
            userwin= computerchoice==="stone"?false:true;
        }
        showwinner(userwin,selected,computerchoice);
    
}
}



