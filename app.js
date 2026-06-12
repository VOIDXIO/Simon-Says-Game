let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let h2=document.querySelector("h2");

let btns=["red","yellow","green","purple"];
document.addEventListener("keypress",function()
{
    if(started==false)
    {
        console.log("game started");
        started=true;
        levelUp();
    }
});

function btnflash(btn)
{
    btn.classList.add("flash");
    setTimeout(()=> {btn.classList.remove("flash");},250);
}

function levelUp()
{
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;
    let r=Math.floor(Math.random()*4);
    let randomColor=btns[r];
    let rbtn=document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    btnflash(rbtn);
}

function checkAns(idx)
{
    
    if(userSeq[idx]===gameSeq[idx])
    {
        if(userSeq.length==gameSeq.length)
        {
            setTimeout(levelUp,1000);
        }
    }
    else
    {
        h2.innerHTML=`Game Over! You Score was <b>${level}</b><br>Press any key to Start.`;
        let body=document.querySelector("body");
        body.style.backgroundColor="red";
        setTimeout(function(){body.style.backgroundColor="white";},100);
        reset();
    }
}

function btnpress()
{
    let btn=this;//this is the btn pressed
    btnflash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns)
{
    btn.addEventListener("click", btnpress);
}

function reset()
{
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}