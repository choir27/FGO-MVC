// const deleteText = document.querySelectorAll('.delete')

// Array.from(deleteText).forEach((element)=>{
//     element.addEventListener('click', deleteServant)
// })


// async function deleteServant(){
//   const info = this.parentNode.childNodes
//   const stats = this.parentNode.parentNode.parentNode.childNodes
//     try{
//       const response = await fetch('deleteComment', {
//           method: 'delete',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'comments' : stats[3].innerText,
//             'likes' : info[5].innerText
//           })
//         })
//       const data = await response.json()
//       location.reload()

//   }catch(err){
//       console.log(err)
//   }
// }


// const thumbText = document.querySelectorAll('.like')


// Array.from(thumbText).forEach((element)=>{
//     element.addEventListener('click', addLike)
// })

// async function addLike(){

//   const info = this.parentNode.childNodes
//   const stats = this.parentNode.parentNode.parentNode.childNodes


//   const comments = stats[3].innerText
//   const commentLikes = info[7].innerText
//   console.log(info[7].innerText)

//         try{
//             const response = await fetch('addCommentLike', {
//                 method: 'put',
//                 headers: {'Content-Type': 'application/json'},
//                 body: JSON.stringify({
//                   'comments' : comments,
//                   'commentLikes' : commentLikes
//                 })
//               })
//             const data = await response.json()
//             console.log(data)
//             location.reload()
    
//         }catch(err){
//             console.log(err)
//         }
//     }
// const deleteText = document.querySelectorAll('.delete')

// Array.from(deleteText).forEach((element)=>{
//     element.addEventListener('click', deleteServant)
// })


// async function deleteServant(){

// let confirmation = confirm('Are you sure you want to delete this?')

// if(confirmation){
//   let info = this.parentNode.parentNode.parentNode.childNodes[1].childNodes
//   let stats = this.parentNode.parentNode.parentNode.childNodes[5].childNodes

//   const servantName = info[3].innerText
//   const gender = info[7].innerText
//   const servantID = info[11].innerText
//   const servantClass = info[15].innerText
//   const rarity = info[19].innerText
//   const servantImage = this.parentNode.parentNode.parentNode.childNodes[3].src.split('/')[3]
//   const starAbsorption = info[22].innerText
//   const starGeneration = info[25].innerText
//   const deathRate = info[28].innerText
//   const alignments = info[31].innerText
//   const attack = stats[5].innerText
//   const attackMax = stats[9].innerText
//   const attackGrail = stats[13].innerText
//   const health = stats[17].innerText
//   const healthMax = stats[21].innerText
//   const healthGrail = stats[25].innerText
//   const cost = stats[29].innerText
//   const npCharge = stats[32].innerText
//   const npAttack = stats[35].innerText
//   const likes =  Number(this.parentNode.childNodes[4].innerText)


//     try{
//       const response = await fetch('deleteServant', {
//           method: 'delete',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'name': servantName,
//             'gender': gender,
//             'servantID' : servantID,
//             'class': servantClass,
//             'image': servantImage,
//             'rarity': rarity,
//             'starAbsorption': starAbsorption,
//             'starGeneration': starGeneration,
//             'deathRate': deathRate,
//             'alignments': alignments,
//             'npCharge':  npCharge,
//             'npAttack': npAttack,
//             'attack': attack,
//             'attackMax' : attackMax,
//             'attackGrail' : attackGrail,
//             'health': health,
//             'healthMax': healthMax,
//             'healthGrail': healthGrail,
//             'cost' : cost,
//             'likes' : likes
//           })
//         })
//       const data = await response.json()
//       location.reload()

//   }catch(err){
//       console.log(err)
//   }
// }

   
// }

// const thumbText = document.querySelectorAll('.likes')


// Array.from(thumbText).forEach((element)=>{
//     element.addEventListener('click', addLike)
// })

// async function addLike(){
//   let info = this.parentNode.parentNode.parentNode.childNodes[1].childNodes
//   let stats = this.parentNode.parentNode.parentNode.childNodes[5].childNodes

//     const servantName = info[3].innerText
//     const gender = info[7].innerText
//     const servantID = info[11].innerText
//     const servantClass = info[15].innerText
//     const rarity = info[19].innerText
//     const servantImage = this.parentNode.parentNode.parentNode.childNodes[3].src.split('/')[3]
//     const starAbsorption = info[22].innerText
//     const starGeneration = info[25].innerText
//     const deathRate = info[28].innerText
//     const alignments = info[31].innerText
//     const attack = stats[5].innerText
//     const attackMax = stats[9].innerText
//     const attackGrail = stats[13].innerText
//     const health = stats[17].innerText
//     const healthMax = stats[21].innerText
//     const healthGrail = stats[25].innerText
//     const cost = stats[29].innerText
//     const npCharge = stats[32].innerText
//     const npAttack = stats[35].innerText
//     const likes =  Number(this.parentNode.childNodes[4].innerText)

//         try{
//             const response = await fetch('addOneLike', {
//                 method: 'put',
//                 headers: {'Content-Type': 'application/json'},
//                 body: JSON.stringify({
//                     'name': servantName,
//                     'gender': gender,
//                     'servantID' : servantID,
//                     'class': servantClass,
//                     'image': servantImage,
//                     'rarity': rarity,
//                     'starAbsorption': starAbsorption,
//                     'starGeneration': starGeneration,
//                     'deathRate': deathRate,
//                     'alignments': alignments,
//                     'npCharge':  npCharge,
//                     'npAttack': npAttack,
//                     'attack': attack,
//                     'attackMax' : attackMax,
//                     'attackGrail' : attackGrail,
//                     'health': health,
//                     'healthMax': healthMax,
//                     'healthGrail': healthGrail,
//                     'cost' : cost,
//                     'likes': likes
//                 })
//               })
//             const data = await response.json()
//             console.log(data)
//             location.reload()
    
//         }catch(err){
//             console.log(err)
//         }
//     }

// const grabServant = document.querySelectorAll('.fate')

// Array.from(grabServant).forEach((element)=>{
//     element.addEventListener('click', getServant)
// })

//     function getServant(){
//         fetch('https://api.atlasacademy.io/export/JP/nice_servant_lore_lang_en.json')
//         .then(res=>res.json())
//         .then(data=>{
//             let index = 0
//             for(let i = 0; i < data.length; i++) {
//                 let splitBySpace = data[i].name.split(' ')
//                 let splitByHyphen = data[i].name.split('-')
//                 let servant = this.classList[1].split('-')

//                 if((splitByHyphen[0] === servant[0] || splitBySpace[0] === servant[0]) && servant[1].toLowerCase() === data[i].className) {
//                  index = i
        
//              break;
//              }
//            }
 
//            console.log(data[index])
//         })
//     }
// document.querySelector('#play').addEventListener('click',playMusic)

// function playMusic(){

// }


// class Fate{
//     constructor(attack, servantClass, cost, deathRate, gender, health, name, npAttack, npCharge, rarity, servantID, starAbsorption, starGeneration, skill1,skill2,skill3 ){
// this.attack = attack
// this.class= servantClass
// this.cost= cost
// this.deathRate= deathRate 
// this.gender= gender
// this.health= health
// this.name= name
// this.npAttack= npAttack
// this.npCharge= npCharge
// this.rarity= rarity
// this.servantID= servantID
// this.starAbsorption= starAbsorption
// this.starGeneration= starGeneration
// this.skill1 = skill1
// this.skill2 = skill2
// this.skill3 = skill3
// this.quick = .90
// this.arts = 1.00
// this.buster = 1.20
//     }
//     s1(){
//         let skill1 =  this.attack + this.attack* (this.arts+ (this.arts *this.skill1))
//           return skill1
//           //costdown 4 turns
//       }
//       s2(){
//          //apply invincible
//         //costdown 6 turns
//      }
//        s3(){
//            let skill3 = servant.attack + servant.attack * this.skill2
//             return skill3
//         //    Increases own critical star absorption for 1 turn. 500%
//         //    Increases own attack for 1 turn.
//         //    costdown 5 turns
//        }
// }

// let salter = new Fate(12408,"Saber",12,'19.2%',"Female",16514,"Artoria Pendragon (Alter)",'0.86%','3%','4 Star',3,99,'9.9%',.20,.100,.50)
// // console.log(salter)
// let servant

// class Fetch extends Fate{
//     getFetch(){
//         let url = 'https://fgo-app.herokuapp.com/api/servants'
    
//         fetch(url)
//             .then(res=>res.json())
//             .then(data=>{
//                 // console.log(data)
//                 for(let i =0;i<data.length;i++){
//                     if(data[i].name!==null){
//                         servant = new Fate(data[i].attackMax,data[i].class,data[i].cost,data[i].deathRate,data[i].gender,data[i].healthMax,data[i].name,data[i].npAttack,data[i].npCharge,data[i].rarity,data[i].servantID,data[i].starAbsorption,data[i].starGeneration)
//                         document.querySelector('.np1').innerHTML = '&#9899;' // fills in circle
//                     }
//                 }
//                 })
//             .catch(err=>console.error(err))
//     }
// }

// let fetchAPI = new Fetch()
// fetchAPI.getFetch()


// class Click{
//     showSkills(){
//         document.querySelector('#skills').addEventListener('click',_=>{
//             document.querySelector('.skills').classList.remove('hidden')
//             document.querySelector('#skills').classList.add('hidden')
//             document.querySelector('#deck').classList.add('hidden')
//             document.querySelector('#back').classList.remove('hidden')
//         })
//     }
//     showDeck(){
//         document.querySelector('#deck').addEventListener('click',_=>{
//             document.querySelector('.deck').classList.remove('hidden')
//             document.querySelector('#skills').classList.add('hidden')
//             document.querySelector('#deck').classList.add('hidden')
//             document.querySelector('#back').classList.remove('hidden')
//         })
//     }   
//     goBack(){
//         document.querySelector('#back').addEventListener('click',_=>{
//             document.querySelector('.deck').classList.add('hidden')
//             document.querySelector('.skills').classList.add('hidden')
//             document.querySelector('#back').classList.add('hidden')
//             document.querySelector('#skills').classList.remove('hidden')
//             document.querySelector('#deck').classList.remove('hidden')
//         })
//     }   
// }

// let click = new Click()
// click.goBack()
// click.showDeck()
// click.showSkills()

// // skills.skill1()
// // skills.skill3()
// // alignments: "Female"
// // attack: "13166"
// // attackGrail: "9261"
// // attackMax: "11213"
// // class: "Lancer"
// // comments: null
// // cost: "12"
// // deathRate: "28%"
// // gender: "Female"
// // health: "11749"
// // healthGrail: "16743"
// // healthMax: "14246"
// // image: "Mysterious_Alter-Ego_Lambda_Sprite1.png"
// // likes: 0
// // name: "Mysterious Alter Ego Λ"
// // npAttack: "0.76%"
// // npCharge: "4%"
// // rarity: "★ ★ ★ ★"
// // servantID: "266"
// // starAbsorption: "91"
// // starGeneration: "12.1%"
// // _id: "62af85df55da1c8b81971c2c"


// let url1 ='https://api.atlasacademy.io/export/JP/asset_storage.json'
// fetch(url1)
//     .then(res=>res.json())
//     .then(data=>{
//         console.log(data)
//         document.querySelector('#test').src = data[1024].fileName
//     })


// let url = 'https://api.atlasacademy.io/export/JP/nice_servant_lore_lang_en.json'

// fetch(url)
//   .then(res=>res.json())
//   .then(data=>{
//     data.forEach(ele=>{
//      if(ele.name === servant.name && ele.className === servant.class.toLowerCase()){
//         // console.log(ele)
//         for(let i =0;i<ele.skills.length;i++){

//             // console.log(ele.skills[i].name)
//             // console.log(ele.skills[i].icon)
//             // console.log(`/${ele.skills[i].icon}`)
            
// // console.log(ele.skills[i].icon)
//             // console.log(ele.skills[i].functions)

//             ele.skills[i].functions.forEach(ele=>{
//                 // console.log(ele.funcPopupIcon)
//                 if(ele.funcPopupIcon!==undefined ){
              
//                     image = ele.funcPopupIcon.split('/')
//                     image = image[image.length-1]
//                 //  console.log(image)
//                 //  console.log(addArr(image))
//                     let icon = document.createElement('img')
//                     icon.src = ele.funcPopupIcon
//                     // console.log(icon)
//                     document.querySelector('#icon').appendChild(icon)
//                 }
//             })
//         }


//         deck(ele.cards)


      
//             // console.log(ele.skills)
//             for(let index = 0;index<3;index++){
//                 // console.log(ele.skills)
//             document.querySelector(`#skill${index}`).src = `${ele.skills[index].icon}`
//                 }

//          }
//     })


    
// })

// function deck(arr){
//     for(let i =0;i<5;i++){
//         document.querySelector(`#card${i}`).src = `/simulator/${arr[i]}.png`
//     }
// }
