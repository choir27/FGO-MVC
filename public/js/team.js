
const servant = document.querySelectorAll('.btn')
Array.from(servant).map((element)=>{
    element.addEventListener('click', function getServant(){
      const servant = document.querySelectorAll('.btn')
      Array.from(servant).map((ele)=>{
        ele.classList.remove('selected')
      })

      document.querySelector('#servant1').setAttribute('value',this.getAttribute('id')  )
      document.querySelector(`.${this.classList[2]}`).classList.add('selected')

    })
  
})


const servant1 = document.querySelectorAll('.btn1')
Array.from(servant1).map((element)=>{
    element.addEventListener('click', function getServant(){
      const servant = document.querySelectorAll('.btn1')
      Array.from(servant).map((ele)=>{
        ele.classList.remove('selected')
      })
      document.querySelector('#servant2').setAttribute('value',this.getAttribute('id')  )
      document.querySelector(`.${this.classList[2]}`).classList.add('selected')

    })
  
})



const servant2 = document.querySelectorAll('.btn2')
Array.from(servant2).map((element)=>{
    element.addEventListener('click', function getServant(){

      clearSelected2()
      document.querySelector('#servant3').setAttribute('value',this.getAttribute('id')  )
      document.querySelector(`.${this.classList[2]}`).classList.add('selected')

    })
  
})

function clearSelected2(){
  const servant = document.querySelectorAll('.btn2')
  Array.from(servant).map((element)=>{
    element.classList.remove('selected')
  
})
}

