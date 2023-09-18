const addButton = document.getElementsByClassName('add')[0];
const subButton = document.getElementsByClassName('sub')[0];
const resetButton = document.getElementsByClassName('reset')[0];
const inputElement = document.getElementsByTagName('input')[0];
const counterText = document.getElementsByClassName('counter')[0];

inputElement.addEventListener('change',(e)=>{
    if(+e.target.value > 10 || +e.target.value < 0 ){
     inputElement.value=1;   
    }
})
addButton.addEventListener('click',()=>{
    const counterVal= counterText.textContent;
    counterText.textContent = +counterVal + +inputElement.value;
})
subButton.addEventListener('click',()=>{
    const counterVal= Number(counterText.textContent);
    counterText.textContent = +counterVal - inputElement.value;
})
resetButton.addEventListener('click',()=>{
    counterText.textContent = 0;
    inputElement.value=1;
})