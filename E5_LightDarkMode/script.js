const input = document.getElementById('themeSwitch');

input.addEventListener('change',()=>{
    if(input.checked){
        document.body.classList.add('dark');
    }
    else{
        document.body.classList.remove('dark');
    }
});