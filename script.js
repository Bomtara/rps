function rps() {
    let cum = Math.random();
    if(cum<=1/3) return "rock";
    else if(1/3<cum<=2/3) return "paper";
    else return "scissor";
}

function rps_rock(){
    let cum = rps()
    if(cum=="rock") 
        alert("Tie!");
    if(cum=="paper") 
        alert("You lose!");
    if(cum=="scissor") 
        alert("You Win!");
}

function rps_paper(){
    let cum = rps()
    if(cum=="rock") 
        return alert("You Win!");
    if(cum=="paper") 
        return alert("Tie!");
    if(cum=="scissor") 
        return alert("You Lose!");
}

function rps_scissor(){
    let cum = rps()
    if(cum=="rock") 
        return alert("You Lose!");
    if(cum=="paper") 
        return alert("You Win!");
    if(cum=="scissor") 
        return alert("Tie!");
}
