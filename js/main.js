

let imgArray = [6];
imgArray[0] = "./image/1.png";
imgArray[1] = "./image/2.png";
imgArray[2] = "./image/3.png";
imgArray[3] = "./image/4.png";
imgArray[4] = "./image/5.png";
imgArray[5] = "./image/6.png";



let clicked = false;
let inzet = 0;
let playername = prompt("wat is je naam?");
let age =  prompt("Hoe oud ben je?" );
if (age >= 18 ) {
    alert (" je mag spelen!");
}
else{
    alert("je bent niet oud genoeg!");
    window.close();
}

if(localStorage.getItem(playername) === null){
    localStorage.setItem(playername, 100);
}

let playerpoints = localStorage.getItem(playername);
console.log(playerpoints);
console.log(localStorage);



function rollDice(z){
   
    let image1 = document.getElementById("1");
    let image2 = document.getElementById("2");
    let image3 = document.getElementById("3");
    let image4 = document.getElementById("4");
    const x = Math.floor(Math.random() * 6)+1;
    const y = Math.floor(Math.random() * 6)+1;
    if (z == 1){
        image1.src = imgArray[x-1];
        image2.src = imgArray[y-1];

        
    } else {
        image3.src = imgArray[x-1];
        image4.src = imgArray[y-1];

        
    }

    return(x+y);
}
function startGame(){
    clicked = true;
    playerpoints = parseInt(playerpoints);
    inzet = prompt("wat is je inzet?");
    if(parseInt(inzet) <= playerpoints){
        dice1 = rollDice(2);
        
    }
    else {
        alert("je hebt niet genoeg punten");
    }
        

    
}


function showScoreboard(){
    let playerArray = [];
    const obj =  localStorage;
    for (const [key, value] of Object.entries(obj)) {
        playerArray.push(`${key} ${value}`)};
    alert(playerArray.join("\n"));
    
}

function hoger(){
    playerpoints = parseInt(playerpoints);
    if(clicked == true){
        dice2 = rollDice(1);
        if (dice1 < dice2 ){
        
            alert("you win!!");
            playerpoints += parseInt(inzet);
            localStorage.setItem(playername, playerpoints);
    
        }  
        else {
            alert("you lose!!");
            playerpoints -= parseInt(inzet);
            localStorage.setItem(playername, playerpoints);
        
        }
        reset();


    }
    else{
        alert("Start de game eerst!");
    }
    
}

function lager(){
    playerpoints = parseInt(playerpoints);
    if (clicked == true) {
        dice2 = rollDice(1);
        if (dice1 > dice2 ){
        
            alert("you win!!");
            playerpoints += parseInt(inzet);
            localStorage.setItem(playername, playerpoints);
    
        }  
        else {
            alert("you lose!!");
            playerpoints -= parseInt(inzet);
            localStorage.setItem(playername, playerpoints);
        
        }
        reset();

    }
    else{
        alert("Start de game eerst!");
    }
    
}

function reset(){
    dice1 = 0;
    dice2 = 0;
    clicked = false
}









