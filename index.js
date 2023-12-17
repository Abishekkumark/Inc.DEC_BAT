
let count = 0
let countEl=document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
function increment(){
    count = count +1
    countEl.innerText = count

}

function decrement(){
    if(count>=1){
    count = count -1
    countEl.textContent= count
    }
}

function save(){
    if(count>=1){
    let countt= count + ' - '
    saveEl.textContent += countt
    
    count = 0
    }
}