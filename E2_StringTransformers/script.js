const lowerCase = document.getElementsByClassName('lowerCase')[0];
const upperCase = document.getElementsByClassName('upperCase')[0];
const camelCase = document.getElementsByClassName('camelCase')[0];
const pascalCase = document.getElementsByClassName('pascalCase')[0];
const inputText = document.getElementById('input');

inputText.addEventListener('input',(e)=>{
    const camelCaseString =  e.target.value.trim().toLowerCase().split(' ')
                            .reduce((a,b)=>a+b[0].toUpperCase()+b.substring(1));
    lowerCase.textContent = e.target.value.toLowerCase();
    upperCase.textContent = e.target.value.toUpperCase();
    camelCase.textContent = camelCaseString;
    // reduce takes 2 arguments 1st a function and 2nd arg is initial value of accumulator,
    // since we are not providing initial value 1st element will be the initial value of accumulator
    // so initial letter of 0th element is not touched
    pascalCase.textContent = camelCaseString ? camelCaseString[0].toUpperCase()+camelCaseString.substring(1): '';
})
