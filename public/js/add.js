let alphabet = 'abcdefghijklmnopqrstuvwxyz'

for(let i = 0;i < alphabet.length; i++){
document.querySelector(`.filter-${alphabet[i]}`).addEventListener('click',function filterByAlphabet(){

  
   let servantSplit = splitClass()

servantSplit.forEach(ele=>{
    document.querySelector(`.${ele}`).classList.remove('hidden')
})

servantSplit.forEach(ele=>{
    if(ele[0].toLowerCase()!==alphabet[i]){
        document.querySelector(`.${ele}`).classList.add('hidden')
    }else{
        document.querySelector(`.${ele}`).classList.remove('hidden')
    }
})

})
}



function splitClass(){
    const splitClass = document.querySelectorAll('.form')
    return Array.from(splitClass).map((element)=>{
    let servantName = element.classList[1]
    

    return servantName.split('').map(ele=>{ 
        if(ele !== ' ' && ele !== '.' && ele !== '-' && ele !== '(' && ele !== ')' && ele !== "'" && ele !== '&' && ele !== '=' && ele !== "\"" && ele !== "\/"){
    return ele
  }else{
         return ''
 }
    }).join('')
    

    })

}


document.querySelector('#letter').addEventListener('click',function filterByLetter(){document.querySelector('.buttons').classList.remove('hidden')})