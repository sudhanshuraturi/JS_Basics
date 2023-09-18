const inputText = document.getElementById('input');
const formatString = (str) => {
    const temp = str.trim().replace(/[^1-9]/gi,'');
    return temp.length > 3 ? `+(${temp.substring(0,3)})-${temp.substring(3)}` : temp;
}
inputText.addEventListener('input',()=>{
 inputText.value = formatString(inputText.value);
})