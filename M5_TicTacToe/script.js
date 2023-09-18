const boxes = document.getElementsByClassName('box');
const winner = document.getElementById('winner');
const turnText = document.getElementById('turn');
const reset = document.getElementById('reset');
let turn = 'X';
let winnerText = null;
const wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const checkWinner = () =>{
    let winnerFound=false;
    wins.forEach((item)=>{
        if(boxes[item[0]].innerText===boxes[item[1]].innerText && 
            boxes[item[1]].innerText===boxes[item[2]].innerText && 
            boxes[item[0]].innerText !== ''){
                winnerText = boxes[item[0]].innerText;
                winnerFound = true;
        }
    })
    if(winnerFound){
        Array.from(boxes).forEach((b)=> b.removeEventListener('click',boxClick))
    }
    return winnerFound; 
}
reset.addEventListener('click',()=>{
    turn = 'X';
    Array.from(boxes).forEach((b)=>{
       b.innerText='';
    })
    winnerText = null;
    winner.innerText = 'No Winner Yet';
})


const boxClick = (e) => {
    const b = e.target;
    if(b.innerText !== '') return;

    b.innerText = turn;
    turn = (turn === 'X' ? 'O' : 'X');
    turnText.innerText = `Who's Turn ---> ${turn}`;
    if(checkWinner()){
        winner.innerText = `${winnerText} WON !!!!!!`;
        turnText.innerText = ``;
    }
}

Array.from(boxes).forEach((b)=>{
    b.addEventListener('click',boxClick);
})