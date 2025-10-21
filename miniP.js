let gamesq=[];
let usersq=[];

let started=false;
let level=0;

let btns=["yellow","red","purple","green"];

document.addEventListener("keypress",function(){
    usersq=[];
    if(started==false){
        console.log("Game is Started");
        started=true;

        levelup();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
};

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
}

let h2=document.querySelector("h2");
function levelup(){
    usersq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    gamesq.push(randColor);
    gameflash(randbtn);


}
function ckeckAns(idx){
    
    if(usersq[idx]===gamesq[idx]){
       if(usersq.length==gamesq.length){
        setTimeout(levelup,1000)
        
       }
    }
    else{
         h2.innerHTML=`Game Over!Your score was<b> ${level}</b><br>Press any key to start`;
         document.querySelector("body").style.backgroundcolor="red";
         setTimeout(function(){
            document.querySelector("body").style.backgroundcolor="white";
         },150);
         resest();
    }
}
function btnPress(){
    let btn=this;
    userflash(btn);

    usercolor=btn.getAttribute("id");
    usersq.push(usercolor);
    ckeckAns(usersq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress)
}

function resest(){
    started=false;
    gamesq=[];
    usersq=[];
    level=0;
}