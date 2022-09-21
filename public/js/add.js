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


document.querySelector('#letter').addEventListener('click',function filterByLetter(){
    document.querySelector('.buttons').classList.remove('hidden')
})


document.querySelector('#servantClass').addEventListener('click',function filterByServantClass(){
    document.querySelector('.servantClass').classList.remove('hidden')
})

document.querySelector('#clear').addEventListener('click',function clearFilters(){
    const splitClass = document.querySelectorAll('.form')
    return Array.from(splitClass).map((element)=>{
        element.classList.remove('hidden')
    })
})

let servantClass = ['saber','archer','lancer','rider','assassin','caster','shielder','avenger','alterego','ruler','berserker']

for(let i = 0; i < servantClass.length ; i++){
    document.querySelector(`.${servantClass[i]}`).addEventListener('click',function filterByClass(){
        let servantSplit = splitClass()

servantSplit.forEach(ele=>{
    document.querySelector(`.${ele}`).classList.remove('hidden')
}) 

servantSplit.forEach(ele=>{
    if(ele.split('_')[1].toLowerCase() !== servantClass[i]){
        document.querySelector(`.${ele}`).classList.add('hidden')
    }else{
        document.querySelector(`.${ele}`).classList.remove('hidden')
    }
})

    })
}

for(let i = 0; i< 6; i++){
    document.querySelector(`.rarity_${i}`).addEventListener('click',function filterByRarity(){
        let splited = document.querySelectorAll('.form')
        splited = Array.from(splited).map((element)=>{
            return element.classList[2]
        })

        

        splited.forEach(ele=>{
            if(ele.split('_')[1] !== i.toString()){
                document.querySelector(`.${ele}`).classList.add('hidden')
            }else{
                document.querySelector(`.${ele}`).classList.remove('hidden')
            }
        })
    })
}