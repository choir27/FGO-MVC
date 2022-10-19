let data = {
  ascension : '',
  servant : '',
  skill : '',
}

for(let i = 0;i < 5; i ++){
document.querySelector(`.card${i}`).addEventListener('click',getCard)
}

function getCard(){
console.log(this.classList[1])
}

document.addEventListener('DOMContentLoaded', function() {
  fetch('https://fgo-app.herokuapp.com/api/servants')
  .then(res=>res.json())
  .then(info=>{
data.ascension = info.ascension[document.querySelector('#skill1').classList[0]]
data.servant = info.servant[document.querySelector('#skill1').classList[0]]
data.skill = info.skill[document.querySelector('#skill1').classList[0]]
})
}, false);


document.querySelector('#skill1').addEventListener('click',getSkill1)

function getUrl(effect,value){
  console.log(effect)
  console.log(value)
  if(effect.toLowerCase().includes('c.') && effect.toLowerCase().includes('star') && effect.toLowerCase().includes('gain')){
    document.querySelector('#stars').innerText = value
   }

   if(effect.toLowerCase().includes('buster') && effect.toLowerCase().includes('up')){
    return 'https://res.cloudinary.com/choir2/image/upload/v1666045351/Status/Buff_Icon_Buster_Up_uvnlvo.png'
   }

   if(effect.toLowerCase().includes('np') && effect.toLowerCase().includes('gain')){
    return 'https://res.cloudinary.com/choir2/image/upload/v1666045412/Status/Buff_Icon_NP_Gain_Up_hnikjh.png'
   }
   
  if(effect.toLowerCase().includes('mental') && effect.toLowerCase().includes('up')){
   return 'https://res.cloudinary.com/choir2/image/upload/v1665428012/Status/Buff_Icon_Debuff_Resist_Up_qyng6q.png'
  }
  if(effect.toLowerCase().includes('atk') && effect.toLowerCase().includes('up')){
    return 'https://res.cloudinary.com/choir2/image/upload/v1665430222/Status/Buff_Icon_Attack_Up_kzggsh.png'
  }
  if(effect.toLowerCase().includes('guts')){
 return 'https://res.cloudinary.com/choir2/image/upload/v1665430434/Status/Buff_Icon_Guts_nxicxo.png'
  }
}


function getSkill1(){
  let target = data.skill.servant[0].skills.skills1.funcTargetType
  let effect = data.skill.servant[0].skills.skills1.funcPopupText
  let value = data.skill.servant[0].skills.skills1.svals[9].Value
if(target === 'self' && (!effect.includes('C.') || !effect.includes('Star'))){
    let status = document.createElement('img')
    status.setAttribute('src',getUrl(effect,value))
    document.querySelector('#status1').appendChild(status)
    document.querySelector('#prompt').innerText = `${data.servant.servant[0].name} used ${data.skill.servant[0].skills.skills1.name}.`
}else if(target === 'self'){
  getUrl(effect,value)
  document.querySelector('#prompt').innerText = `${data.servant.servant[0].name} used ${data.skill.servant[0].skills.skills1.name}.`
}
else if(target === 'ptAll'){
  let status = document.createElement('img')
  status.setAttribute('src',getUrl(effect,value))
  document.querySelector('#status1').appendChild(status)
  document.querySelector('#prompt').innerText = `${data.servant.servant[0].name} used ${data.skill.servant[0].skills.skills2.name}.`
  document.querySelector('#prompt').innerText = `${data.servant.servant[0].name} used ${data.skill.servant[0].skills.skills2.name}.`
}
}

document.querySelector('#skill2').addEventListener('click',getSkill2)
  
function getSkill2(){
  let target = data.skill.servant[0].skills.skills2.funcTargetType
  let effect = data.skill.servant[0].skills.skills2.funcPopupText
  let value = data.skill.servant[0].skills.skills2.svals[9].Value
  if(target === 'self' && (!effect.includes('C.') || !effect.includes('Star'))){
    let status = document.createElement('img')
    status.setAttribute('src',getUrl(effect,value))
    document.querySelector('#status1').appendChild(status)
    document.querySelector('#prompt').innerText = `${data.servant.servant[0].name} used ${data.skill.servant[0].skills.skills2.name}.`
}
  else if(target === 'self'){
    let status = document.createElement('img')
    status.setAttribute('src',getUrl(effect,value))
    document.querySelector('#status1').appendChild(status)
    document.querySelector('#prompt').innerText = `${data.servant.servant[0].name} used ${data.skill.servant[0].skills.skills2.name}.`
  }
  else if(target === 'ptAll'){
    let status = document.createElement('img')
    status.setAttribute('src',getUrl(effect,value))
    document.querySelector('#status1').appendChild(status)
    document.querySelector('#prompt').innerText = `${data.servant.servant[0].name} used ${data.skill.servant[0].skills.skills2.name}.`
    document.querySelector('#prompt').innerText = `${data.servant.servant[0].name} used ${data.skill.servant[0].skills.skills2.name}.`
  }
}


document.querySelector('#skill3').addEventListener('click',getSkill3)

function getSkill3(){  
  let target = data.skill.servant[0].skills.skills3.funcTargetType
  let effect = data.skill.servant[0].skills.skills3.funcPopupText
  let value = data.skill.servant[0].skills.skills3.svals[9].Value
  if(target === 'self' && (!effect.includes('C.') || !effect.includes('Star'))){
    let status = document.createElement('img')
    status.setAttribute('src',getUrl(effect,value))
    document.querySelector('#status1').appendChild(status)
    document.querySelector('#prompt').innerText = `${data.servant.servant[0].name} used ${data.skill.servant[0].skills.skills3.name}.`
}
 else if(target === 'self'){
    getUrl(effect,value)
    document.querySelector('#prompt').innerText = `${data.servant.servant[0].name} used ${data.skill.servant[0].skills.skills3.name}.`
  } else if(target === 'ptAll'){
    let status = document.createElement('img')
   'src',getUrl(effect,value)
    document.querySelector('#prompt').innerText = `${data.servant.servant[0].name} used ${data.skill.servant[0].skills.skills2.name}.`
  }
}


document.querySelector('#help1').addEventListener('click', skillHelp1)

function skillHelp1(){
  document.querySelector('#detail').innerText = `${data.skill.servant[0].skills.skills1.detail}`
}


document.querySelector('#help2').addEventListener('click', skillHelp2)

function skillHelp2(){
  document.querySelector('#detail').innerText = `${data.skill.servant[0].skills.skills2.detail}`
}


document.querySelector('#help3').addEventListener('click', skillHelp3)

function skillHelp3(){
  document.querySelector('#detail').innerText = `${data.skill.servant[0].skills.skills3.detail}`
}


// const servant = document.querySelectorAll('.btn')
// Array.from(servant).map((element)=>{
//     element.addEventListener('click', function getServant(){
//       const servant = document.querySelectorAll('.btn')
//       Array.from(servant).map((ele)=>{
//         ele.classList.remove('selected')
//       })

//       document.querySelector('#servant1').setAttribute('value',this.getAttribute('id')  )
//       document.querySelector(`.${this.classList[2]}`).classList.add('selected')

//     })
  
// })


// const servant1 = document.querySelectorAll('.btn1')
// Array.from(servant1).map((element)=>{
//     element.addEventListener('click', function getServant(){
//       const servant = document.querySelectorAll('.btn1')
//       Array.from(servant).map((ele)=>{
//         ele.classList.remove('selected')
//       })
//       document.querySelector('#servant2').setAttribute('value',this.getAttribute('id')  )
//       document.querySelector(`.${this.classList[2]}`).classList.add('selected')

//     })
  
// })



// const servant2 = document.querySelectorAll('.btn2')
// Array.from(servant2).map((element)=>{
//     element.addEventListener('click', function getServant(){

//       clearSelected2()
//       document.querySelector('#servant3').setAttribute('value',this.getAttribute('id')  )
//       document.querySelector(`.${this.classList[2]}`).classList.add('selected')

//     })
  
// })

// function clearSelected2(){
//   const servant = document.querySelectorAll('.btn2')
//   Array.from(servant).map((element)=>{
//     element.classList.remove('selected')
  
// })
// }

