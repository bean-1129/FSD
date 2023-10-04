const points = document.querySelector('points.value');
const p1 = document.querySelector('#player1');
const p2 = document.querySelector('#player2');
let p1Score=0;
let p2Score=0;
let winningScore = 5;
let isGameOver = false;
const btn1 = document.querySelector('#btnPlayer1');
const btn2 = document.querySelector('#btnPlayer2');
const btn3 = document.querySelector('#btnReset');

btn1.addEventListener('click',function(){
    if(!isGameOver){
        p1Score+=1;
    }if(isGameOver){
        p1.textContent= p1Score;
    }
});
btn2.addEventListener('click',function(){
    if(!isGameOver){
        p2Score+=1;
    }if(isGameOver){
        p2.textContent= p2Score;
    }
});