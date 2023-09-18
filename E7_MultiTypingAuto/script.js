const secondPart = document.getElementById('secondPart');
const values = ['Developer', 'React Developer', 'Front End Specialist']

function delay(duration){
    return new Promise((resolve)=> setTimeout(resolve, duration))
}

async function textLoad(){
    for(item of values){
        console.log(item, values)
        await delay(200);
        for(let i=0; i<item.length; i++){
            secondPart.textContent += item.charAt(i);
            await delay(200);
        }
        await delay(300);
        for(let i=0; i<item.length; i++){
            secondPart.textContent = item.substring(0, item.length-1-i);
            await delay(200);
        }
        await delay(200);
    }
    textLoad();
}

textLoad();