const showDialog = document.getElementById('showDialog');
const closeDialog = document.getElementById('closeDialog');
const dialogPopup = document.getElementById('dialogPopup');

showDialog.addEventListener('click',()=>dialogPopup.showModal())
closeDialog.addEventListener('click', ()=>dialogPopup.close())