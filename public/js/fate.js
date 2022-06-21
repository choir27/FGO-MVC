class Fate{
    constructor(attack, servantClass, cost, deathRate, gender, health, name, npAttack, npCharge, rarity, servantID, starAbsorption, starGeneration ){
this.attack = attack
this.class= servantClass
this.cost= cost
this.deathRate= deathRate 
this.gender= gender
this.health= health
this.name= name
this.npAttack= npAttack
this.npCharge= npCharge
this.rarity= rarity
this.servantID= servantID
this.starAbsorption= starAbsorption
this.starGeneration= starGeneration
    }
    
}

let salter = new Fate(12408,"Saber",12,'19.2%',"Female","Artoria Pendragon (Alter)",'0.86%','3%',4,3,99,'9.9%')
console.log(salter)


class Fetch extends Fate{
    constructor(attack, servantClass, cost, deathRate, gender, health, name, npAttack, npCharge, rarity, servantID, starAbsorption, starGeneration ){
    super(attack, servantClass, cost, deathRate, gender, health, name, npAttack, npCharge, rarity, servantID, starAbsorption, starGeneration)
    }
    getFetch(){
        let url = 'https://fgo-app.herokuapp.com/api/servants'
    
        fetch(url)
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                let servant = new Fate(data[0].attackMax,data[0].class,data[0].cost,data[0].deathRate,data[0].gender,data[0].healthMax,data[0].name,data[0].npAttack,data[0].npCharge,data[0].rarity,data[0].servantID,data[0].starAbsorption,data[0].starGeneration)
                document.querySelector('.np1').innerHTML = '&#9899;' // fills in circle
            })
            .catch(err=>console.error(err))
    }
}

let fetchAPI = new Fetch()
fetchAPI.getFetch()

class Click{
    showSkills(){
        document.querySelector('#skills').addEventListener('click',_=>{
            document.querySelector('.skills').classList.remove('hidden')
            document.querySelector('#skills').classList.add('hidden')
            document.querySelector('#deck').classList.add('hidden')
            document.querySelector('#back').classList.remove('hidden')
        })
    }
    showDeck(){
        document.querySelector('#deck').addEventListener('click',_=>{
            document.querySelector('.deck').classList.remove('hidden')
            document.querySelector('#skills').classList.add('hidden')
            document.querySelector('#deck').classList.add('hidden')
            document.querySelector('#back').classList.remove('hidden')
        })
    }   
    goBack(){
        document.querySelector('#back').addEventListener('click',_=>{
            document.querySelector('.deck').classList.add('hidden')
            document.querySelector('.skills').classList.add('hidden')
            document.querySelector('#back').classList.add('hidden')
            document.querySelector('#skills').classList.remove('hidden')
            document.querySelector('#deck').classList.remove('hidden')
        })
    }   
}

let click = new Click()
click.goBack()
click.showDeck()
click.showSkills()

// alignments: "Female"
// attack: "13166"
// attackGrail: "9261"
// attackMax: "11213"
// class: "Lancer"
// comments: null
// cost: "12"
// deathRate: "28%"
// gender: "Female"
// health: "11749"
// healthGrail: "16743"
// healthMax: "14246"
// image: "Mysterious_Alter-Ego_Lambda_Sprite1.png"
// likes: 0
// name: "Mysterious Alter Ego Λ"
// npAttack: "0.76%"
// npCharge: "4%"
// rarity: "★ ★ ★ ★"
// servantID: "266"
// starAbsorption: "91"
// starGeneration: "12.1%"
// _id: "62af85df55da1c8b81971c2c"