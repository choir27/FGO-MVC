let data = {
  servant1:{
    ascension : '',
    profile : '',
    skill : '',
  },
  servant2:{
    ascension : '',
    profile : '',
    skill : '',
  },
  servant3:{
    ascension : '',
    profile : '',
    skill : '',
  }
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
data.servant1.ascension = info.ascension[document.querySelector('#skill1').classList[0]]
data.servant1.profile = info.servant[document.querySelector('#skill1').classList[0]]
data.servant1.skill = info.skill[document.querySelector('#skill1').classList[0]]

data.servant2.ascension = info.ascension[document.querySelector('#skill4').classList[0]]
data.servant2.profile = info.servant[document.querySelector('#skill4').classList[0]]
data.servant2.skill = info.skill[document.querySelector('#skill4').classList[0]]

data.servant3.ascension = info.ascension[document.querySelector('#skill8').classList[0]]
data.servant3.profile = info.servant[document.querySelector('#skill8').classList[0]]
data.servant3.skill = info.skill[document.querySelector('#skill8').classList[0]]
})
}, false);



function getUrl(effect,value){
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

document.querySelector('#skill1').addEventListener('click',getSkill1)
document.querySelector('#skill4').addEventListener('click',getSkill1)
document.querySelector('#skill7').addEventListener('click',getSkill1)


function getSkill1(){
  let status = document.createElement('img')
  
    if(this.getAttribute("id")=='skill1'){
      let target = data.servant1.skill.servant[0].skills.skills1
      effect = data.servant1.skill.servant[0].skills.skills1.funcPopupText
      value = data.servant1.skill.servant[0].skills.skills1.svals[9].Value

      if(effect.includes('C.') || effect.includes('Star')){
    document.querySelector('#prompt').innerText = `${data.servant1.profile.servant[0].name} used ${data.servant1.skill.servant[0].skills.skills1.name}.`
      }
      else if(target === 'self'){
        status.setAttribute('src',getUrl(effect,value))
        document.querySelector('#status1').appendChild(status)
        document.querySelector('#prompt').innerText = `${data.servant1.profile.servant[0].name} used ${data.servant1.skill.servant[0].skills.skills1.name}.`
      }

      else if(target === 'ptAll'){
        effect = data.servant1.skill.servant[0].skills.skills1.funcPopupText
        value = data.servant1.skill.servant[0].skills.skills1.svals[9].Value
        document.querySelector('#buff1').setAttribute('src',getUrl(effect,value))
        document.querySelector('#buff2').setAttribute('src',getUrl(effect,value))
        document.querySelector('#buff3').setAttribute('src',getUrl(effect,value))
        document.querySelector('#prompt').innerText = `${data.servant1.profile.servant[0].name} used ${data.servant1.skill.servant[0].skills.skills1.name}.`

    }
}else if(this.getAttribute("id") == 'skill4'){
      let target = data.servant2.skill.servant[0].skills.skills1.funcTargetType
      effect = data.servant2.skill.servant[0].skills.skills1.funcPopupText
      value = data.servant2.skill.servant[0].skills.skills1.svals[9].Value

      
      if(effect.includes('C.') || effect.includes('Star')){
    document.querySelector('#prompt').innerText = `${data.servant2.profile.servant[0].name} used ${data.servant2.skill.servant[0].skills.skills1.name}.`
      }
      else if(target === 'self'){
        status.setAttribute('src',getUrl(effect,value))
        document.querySelector('#status2').appendChild(status)
        document.querySelector('#prompt').innerText = `${data.servant2.profile.servant[0].name} used ${data.servant2.skill.servant[0].skills.skills1.name}.`
      }

      else if(target === 'ptAll'){
        effect = data.servant2.skill.servant[0].skills.skills1.funcPopupText
        value = data.servant2.skill.servant[0].skills.skills1.svals[9].Value
        document.querySelector('#buff1').setAttribute('src',getUrl(effect,value))
        document.querySelector('#buff2').setAttribute('src',getUrl(effect,value))
        document.querySelector('#buff3').setAttribute('src',getUrl(effect,value))
        document.querySelector('#prompt').innerText = `${data.servant2.profile.servant[0].name} used ${data.servant2.skill.servant[0].skills.skills1.name}.`

}
}else if(this.getAttribute("id") == 'skill7'){
  let target = data.servant3.skill.servant[0].skills.skills1.funcTargetType
  effect = data.servant3.skill.servant[0].skills.skills1.funcPopupText
  value = data.servant3.skill.servant[0].skills.skills1.svals[9].Value

  if(effect.includes('C.') || effect.includes('Star')){
document.querySelector('#prompt').innerText = `${data.servant3.profile.servant[0].name} used ${data.servant3.skill.servant[0].skills.skills1.name}.`
  }
  else if(target === 'self'){
    status.setAttribute('src',getUrl(effect,value))
    document.querySelector('#status3').appendChild(status)
    document.querySelector('#prompt').innerText = `${data.servant3.profile.servant[0].name} used ${data.servant3.skill.servant[0].skills.skills1.name}.`
  }

  else if(target === 'ptAll'){
    effect = data.servant3.skill.servant[0].skills.skills1.funcPopupText
    value = data.servant3.skill.servant[0].skills.skills1.svals[9].Value
    status.setAttribute('src',getUrl(effect,value))

    document.querySelector('#buff1').setAttribute('src',getUrl(effect,value))
    document.querySelector('#buff2').setAttribute('src',getUrl(effect,value))
    document.querySelector('#buff3').setAttribute('src',getUrl(effect,value))
    document.querySelector('#prompt').innerText = `${data.servant3.profile.servant[0].name} used ${data.servant3.skill.servant[0].skills.skills1.name}.`

}
 }
}

document.querySelector('#skill2').addEventListener('click',getSkill2)
document.querySelector('#skill5').addEventListener('click',getSkill2)
document.querySelector('#skill8').addEventListener('click',getSkill2)

function getSkill2(){

  let status = document.createElement('img')

  if(this.getAttribute("id")=='skill2'){
    let target = data.servant1.skill.servant[0].skills.skills2.funcTargetType
    effect = data.servant1.skill.servant[0].skills.skills2.detail
    value = data.servant1.skill.servant[0].skills.skills2.svals[9].Value


    if(effect.includes('&')){
  let buffs = getUrl(effect,value)
  buffs.forEach(ele=>{
    status.setAttribute('src',ele)
    document.querySelector('#status1').appendChild(status)
    console.log(document.querySelector('#status1'))
  })

}



    if(effect.includes('C.') || effect.includes('Star')){
  document.querySelector('#prompt').innerText = `${data.servant1.profile.servant[0].name} used ${data.servant1.skill.servant[0].skills.skills2.name}.`
    }
    else if(target === 'self'){
      status.setAttribute('src',getUrl(effect,value))
      document.querySelector('#status1').appendChild(status)
      document.querySelector('#prompt').innerText = `${data.servant1.profile.servant[0].name} used ${data.servant1.skill.servant[0].skills.skills2.name}.`
    }

    else if(target === 'ptAll'){
      effect = data.servant1.skill.servant[0].skills.skills2.funcPopupText
      value = data.servant1.skill.servant[0].skills.skills2.svals[9].Value
      document.querySelector('#buff1').setAttribute('src',getUrl(effect,value))
      document.querySelector('#buff2').setAttribute('src',getUrl(effect,value))
      document.querySelector('#buff3').setAttribute('src',getUrl(effect,value))
      document.querySelector('#prompt').innerText = `${data.servant1.profile.servant[0].name} used ${data.servant1.skill.servant[0].skills.skills2.name}.`

  }
}else if(this.getAttribute("id") == 'skill5'){
    let target = data.servant2.skill.servant[0].skills.skills2.funcTargetType
    effect = data.servant2.skill.servant[0].skills.skills2.funcPopupText
    value = data.servant2.skill.servant[0].skills.skills2.svals[9].Value

    
    if(effect.includes('C.') || effect.includes('Star')){
  document.querySelector('#prompt').innerText = `${data.servant2.profile.servant[0].name} used ${data.servant2.skill.servant[0].skills.skills2.name}.`
    }
    else if(target === 'self'){
      status.setAttribute('src',getUrl(effect,value))
      document.querySelector('#status2').appendChild(status)
      document.querySelector('#prompt').innerText = `${data.servant2.profile.servant[0].name} used ${data.servant2.skill.servant[0].skills.skills2.name}.`
    }

    else if(target === 'ptAll'){
      effect = data.servant2.skill.servant[0].skills.skills2.funcPopupText
      value = data.servant2.skill.servant[0].skills.skills2.svals[9].Value
      document.querySelector('#buff1').setAttribute('src',getUrl(effect,value))
      document.querySelector('#buff2').setAttribute('src',getUrl(effect,value))
      document.querySelector('#buff3').setAttribute('src',getUrl(effect,value))
      document.querySelector('#prompt').innerText = `${data.servant2.profile.servant[0].name} used ${data.servant2.skill.servant[0].skills.skills2.name}.`

}
}else if(this.getAttribute("id") == 'skill8'){
let target = data.servant3.skill.servant[0].skills.skills2.funcTargetType
effect = data.servant3.skill.servant[0].skills.skills2.funcPopupText
value = data.servant3.skill.servant[0].skills.skills2.svals[9].Value


if(effect.includes('C.') || effect.includes('Star')){
document.querySelector('#prompt').innerText = `${data.servant3.profile.servant[0].name} used ${data.servant3.skill.servant[0].skills.skills2.name}.`
}
else if(target === 'self'){
  status.setAttribute('src',getUrl(effect,value))
  document.querySelector('#status3').appendChild(status)
  document.querySelector('#prompt').innerText = `${data.servant3.profile.servant[0].name} used ${data.servant3.skill.servant[0].skills.skills2.name}.`
}

else if(target === 'ptAll'){
  effect = data.servant3.skill.servant[0].skills.skills2.funcPopupText
  value = data.servant3.skill.servant[0].skills.skills2.svals[9].Value
  status.setAttribute('src',getUrl(effect,value))

  document.querySelector('#buff1').setAttribute('src',getUrl(effect,value))
  document.querySelector('#buff2').setAttribute('src',getUrl(effect,value))
  document.querySelector('#buff3').setAttribute('src',getUrl(effect,value))
  document.querySelector('#prompt').innerText = `${data.servant3.profile.servant[0].name} used ${data.servant3.skill.servant[0].skills.skills2.name}.`

}
}
}


document.querySelector('#skill3').addEventListener('click',getSkill3)
document.querySelector('#skill9').addEventListener('click',getSkill3)
document.querySelector('#skill6').addEventListener('click',getSkill3)

function getSkill3(){  
  let status = document.createElement('img')

  if(this.getAttribute("id")=='skill3'){
    let target = data.servant1.skill.servant[0].skills.skills3.funcTargetType
    effect = data.servant1.skill.servant[0].skills.skills3.funcPopupText
    value = data.servant1.skill.servant[0].skills.skills3.svals[9].Value


    if(effect.includes('C.') || effect.includes('Star')){
  document.querySelector('#prompt').innerText = `${data.servant1.profile.servant[0].name} used ${data.servant1.skill.servant[0].skills.skills3.name}.`
    }
    else if(target === 'self'){
      status.setAttribute('src',getUrl(effect,value))
      document.querySelector('#status1').appendChild(status)
      document.querySelector('#prompt').innerText = `${data.servant1.profile.servant[0].name} used ${data.servant1.skill.servant[0].skills.skills3.name}.`
    }

    else if(target === 'ptAll'){
      effect = data.servant1.skill.servant[0].skills.skills3.funcPopupText
      value = data.servant1.skill.servant[0].skills.skills3.svals[9].Value
      document.querySelector('#buff1').setAttribute('src',getUrl(effect,value))
      document.querySelector('#buff2').setAttribute('src',getUrl(effect,value))
      document.querySelector('#buff3').setAttribute('src',getUrl(effect,value))
      document.querySelector('#prompt').innerText = `${data.servant1.profile.servant[0].name} used ${data.servant1.skill.servant[0].skills.skills3.name}.`

  }
}else if(this.getAttribute("id") == 'skill6'){
    let target = data.servant2.skill.servant[0].skills.skills3.funcTargetType
    effect = data.servant2.skill.servant[0].skills.skills3.funcPopupText
    value = data.servant2.skill.servant[0].skills.skills3.svals[9].Value

    
    if(effect.includes('C.') || effect.includes('Star')){
  document.querySelector('#prompt').innerText = `${data.servant2.profile.servant[0].name} used ${data.servant2.skill.servant[0].skills.skills3.name}.`
    }
    else if(target === 'self'){
      status.setAttribute('src',getUrl(effect,value))
      document.querySelector('#status2').appendChild(status)
      document.querySelector('#prompt').innerText = `${data.servant2.profile.servant[0].name} used ${data.servant2.skill.servant[0].skills.skills3.name}.`
    }

    else if(target === 'ptAll'){
      effect = data.servant2.skill.servant[0].skills.skills3.funcPopupText
      value = data.servant2.skill.servant[0].skills.skills3.svals[9].Value
      document.querySelector('#buff1').setAttribute('src',getUrl(effect,value))
      document.querySelector('#buff2').setAttribute('src',getUrl(effect,value))
      document.querySelector('#buff3').setAttribute('src',getUrl(effect,value))
      document.querySelector('#prompt').innerText = `${data.servant2.profile.servant[0].name} used ${data.servant2.skill.servant[0].skills.skills3.name}.`

}
}else if(this.getAttribute("id") == 'skill9'){
let target = data.servant3.skill.servant[0].skills.skills3.funcTargetType
effect = data.servant3.skill.servant[0].skills.skills3.funcPopupText
value = data.servant3.skill.servant[0].skills.skills3.svals[9].Value


if(effect.includes('C.') || effect.includes('Star')){
document.querySelector('#prompt').innerText = `${data.servant3.profile.servant[0].name} used ${data.servant3.skill.servant[0].skills.skills3.name}.`
}
else if(target === 'self'){
  status.setAttribute('src',getUrl(effect,value))
  document.querySelector('#status3').appendChild(status)
  document.querySelector('#prompt').innerText = `${data.servant3.profile.servant[0].name} used ${data.servant3.skill.servant[0].skills.skills3.name}.`
}

else if(target === 'ptAll'){
  effect = data.servant3.skill.servant[0].skills.skills3.funcPopupText
  value = data.servant3.skill.servant[0].skills.skills3.svals[9].Value
  status.setAttribute('src',getUrl(effect,value))

  document.querySelector('#buff1').setAttribute('src',getUrl(effect,value))
  document.querySelector('#buff2').setAttribute('src',getUrl(effect,value))
  document.querySelector('#buff3').setAttribute('src',getUrl(effect,value))
  document.querySelector('#prompt').innerText = `${data.servant3.profile.servant[0].name} used ${data.servant3.skill.servant[0].skills.skills3.name}.`

}
}
}


document.querySelector('#help1').addEventListener('click', skillHelp1)
document.querySelector('#help4').addEventListener('click', skillHelp1)
document.querySelector('#help7').addEventListener('click', skillHelp1)

function skillHelp1(){
  if(this.getAttribute("id") == 'help1'){
    document.querySelector('#detail').innerText = `${data.servant1.skill.servant[0].skills.skills1.name}'s effect: ${data.servant1.skill.servant[0].skills.skills1.detail}.`
  }else if(this.getAttribute("id") == 'help4'){
    document.querySelector('#detail').innerText = `${data.servant2.skill.servant[0].skills.skills1.name}'s effect: ${data.servant2.skill.servant[0].skills.skills1.detail}.`
  }else if(this.getAttribute("id") == 'help7'){
    document.querySelector('#detail').innerText = `${data.servant3.skill.servant[0].skills.skills1.name}'s effect: ${data.servant3.skill.servant[0].skills.skills1.detail}.`
  }
}


document.querySelector('#help2').addEventListener('click', skillHelp2)
document.querySelector('#help5').addEventListener('click', skillHelp2)
document.querySelector('#help8').addEventListener('click', skillHelp2)

function skillHelp2(){
  if(this.getAttribute("id") == 'help2'){
    document.querySelector('#detail').innerText = `${data.servant1.skill.servant[0].skills.skills2.name}'s effect: ${data.servant1.skill.servant[0].skills.skills2.detail}.`
  }else if(this.getAttribute("id") == 'help5'){
    document.querySelector('#detail').innerText = `${data.servant2.skill.servant[0].skills.skills2.name}'s effect: ${data.servant2.skill.servant[0].skills.skills2.detail}.`
  }else if(this.getAttribute("id") == 'help8'){
    document.querySelector('#detail').innerText = `${data.servant3.skill.servant[0].skills.skills2.name}'s effect: ${data.servant3.skill.servant[0].skills.skills2.detail}.`
  }
}


document.querySelector('#help3').addEventListener('click', skillHelp3)
document.querySelector('#help6').addEventListener('click', skillHelp3)
document.querySelector('#help9').addEventListener('click', skillHelp3)

function skillHelp3(){
  if(this.getAttribute("id") == 'help3'){
    document.querySelector('#detail').innerText = `${data.servant1.skill.servant[0].skills.skills3.name}'s effect: ${data.servant1.skill.servant[0].skills.skills3.detail}.`
  }else if(this.getAttribute("id") == 'help6'){
    document.querySelector('#detail').innerText = `${data.servant2.skill.servant[0].skills.skills3.name}'s effect: ${data.servant2.skill.servant[0].skills.skills3.detail}.`
  }else if(this.getAttribute("id") == 'help9'){
    document.querySelector('#detail').innerText = `${data.servant3.skill.servant[0].skills.skills3.name}'s effect: ${data.servant3.skill.servant[0].skills.skills3.detail}.`
  }}

