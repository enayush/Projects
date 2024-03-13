let userScore=0;
let compScore=0;
const userSpan = document.querySelector('.user-score')
const compSpan = document.querySelector('.comp-score')
const result = document.querySelector('.result')
const rock = document.querySelector('#r')
const paper = document.querySelector('#p')
const scissors = document.querySelector('#s')
const reset = document.querySelector('#reset')

const arr = ['r','p','s'];
function compValue() {
    const index = Math.floor(Math.random() * 3);
    return arr[index];
}
function checkRound(a,b){
    if(a==b){
        return -1;
    }
    if(a=='r' && b=='p'){
        return false;
    }
    if(a=='r' && b=='s'){
        return true;
    }
    if(a=='p' && b=='s'){
        return false;
    }
    if(a=='p' && b=='r'){
        return true;
    }
    if(a=='s' && b=='p'){
        return true;
    }
    if(a=='s' && b=='r'){
        return false;
    }
}
function addColor(a,b){
    if(b==true){
        document.querySelector(`#${a}`).classList.add('green-glow');
        setTimeout(function(){
            document.querySelector(`#${a}`).classList.remove('green-glow')
        },500)
    }
    if(b==false){
        document.querySelector(`#${a}`).classList.add('red-glow');
        setTimeout(function(){
            document.querySelector(`#${a}`).classList.remove('red-glow')
        },500)
    }
    if(b==-1){
        document.querySelector(`#${a}`).classList.add('grey-glow');
        setTimeout(function(){
            document.querySelector(`#${a}`).classList.remove('grey-glow')
        },500)
    }
}

rock.addEventListener('click',(e)=>{
    const b = compValue();
    const ans = checkRound('r',b);
    addColor('r',ans);
    if(ans==true){
        userScore++;
        userSpan.innerHTML = userScore;
        result.innerHTML = 'Rock covers Scissors. User wins'
    }
    else if(ans==false){
        compScore++;
        compSpan.innerHTML=compScore;
        result.innerHTML = 'Paper covers Rock. Computer wins'
    }
    else{
        result.innerHTML = "That's a Draw"
    }
})
paper.addEventListener('click',(e)=>{
    const b = compValue();
    const ans = checkRound('p',b);
    addColor('p',ans);
    if(ans==true){
        userScore++;
        userSpan.innerHTML = userScore;
        result.innerHTML = 'Paper covers Rock. User wins'
    }
    else if(ans==false){
        compScore++;
        compSpan.innerHTML=compScore;
        result.innerHTML = 'Scissors covers Paper. Computer wins'
    }
    else{
        result.innerHTML = "That's a Draw"
    }
})
scissors.addEventListener('click',(e)=>{
    const b = compValue();
    const ans = checkRound('s',b);
    addColor('s',ans);
    if(ans==true){
        userScore++;
        userSpan.innerHTML = userScore;
        result.innerHTML = 'Scissors covers Paper. User wins'
    }
    else if(ans==false){
        compScore++;
        compSpan.innerHTML=compScore;
        result.innerHTML = 'Rock covers Scissors. Computer wins'
    }
    else{
        result.innerHTML = "That's a Draw"
    }
})
reset.addEventListener('click',(e)=>{
    result.innerHTML = "Let's Start"
    userScore=0;
    compScore=0;
    userSpan.innerHTML = userScore;
    compSpan.innerHTML= compScore;
})
