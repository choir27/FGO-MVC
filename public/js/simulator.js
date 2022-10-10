const data = {
  ascension : '',
  servant : '',
  skill : '',
}

fetch('https://fgo-app.herokuapp.com/api/servants')
  .then(res=>res.json())
  .then(info=>{
data.ascension = info.ascension[document.querySelector('#skill1').classList[0]]
data.servant = info.servant[document.querySelector('#skill1').classList[0]]
data.skill = info.skill[document.querySelector('#skill1').classList[0]]
})



document.querySelector('#skill1').addEventListener('click',getSkill1)

function getSkill1(){
    document.querySelector('#prompt').innerText = `${data.servant.servant[0].name} used ${data.skill.servant[0].skills.skills1.name}.`
}

document.querySelector('#help1').addEventListener('click', skillHelp)

function skillHelp(){
  document.querySelector('#detail').innerText = `${data.skill.servant[0].skills.skills1.detail}`
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

