const reset = document.querySelector('#btn')
const ngame = document.querySelector('#ngame')
const board = document.querySelectorAll('.box');
const result = document.querySelector('.result')
const userSpan = document.querySelector('.user-score')
const compSpan = document.querySelector('.comp-score')

let turn0 = true;
let userScore=0;
let compScore=0;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

board.forEach(box => {
    box.addEventListener('click',(e)=>{
        console.log('box clicked')
        if(turn0==true) {
            box.innerHTML = 'X';
            turn0=false;
        }
        else if(turn0==false) {
            box.innerHTML = 'O';
            turn0=true;
        }
        box.classList.add('disable')
        const val = checkWinner();
        if(val==="X"){
            scoreUpdate(true);
            disableBtn();
        }
        else if(val=="O"){
            scoreUpdate(false);
            disableBtn();
        }
    })
});
function disableBtn(){
    board.forEach(box=>{
        box.classList.remove('disable')
    })
}

function checkWinner(){
    let ans="";
    winPattern.forEach(pattern=>{
        const val1 = board[pattern[0]].innerText;
        const val2 = board[pattern[1]].innerText;
        const val3 = board[pattern[2]].innerText;
            if(val1===val2 && val2===val3 && val3==="X"){
                result.innerHTML = "X is Winner"
                ans = "X";
                
            }
            if(val1===val2 && val2===val3 && val3==="O"){
                result.innerHTML = "O is winner"
                ans="O";
            } 
    })
    return ans;
}

function scoreUpdate(a){
    if(a===true){
        userScore++;
        userSpan.innerHTML = userScore;
    }
    else if(a===false){
        compScore++;
        compSpan.innerHTML=compScore;
    }
}
reset.addEventListener('click',(e)=>{
    board.forEach(box=>{
        box.innerHTML="";
        box.classList.remove('disable')
    })
    result.innerHTML = "Let's Start";
    turn = true;
    userScore=0;
    compScore=0;
    userSpan.innerHTML = userScore;
    compSpan.innerHTML= compScore;
})
ngame.addEventListener('click',(e)=>{
    board.forEach(box=>{
        box.innerHTML="";
        box.classList.remove('disable')
    })
    result.innerHTML = "Let's Start";
    turn = true;
})