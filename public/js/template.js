for(let i = 1; i < 6; i++){
    document.querySelector(`.link${i}`).addEventListener('click',showTab`${i}`)
}

function showTab1(){
    for(let i = 1; i < 6; i++){
        document.querySelector(`.link${i}`).classList.add('hidden')
    }
    this.classList.remove('hidden')
    
}