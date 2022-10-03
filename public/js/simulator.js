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

// for(let i = 1; i < 4; i++){
//     document.querySelector(`#skill${i}`).addEventListener('click',)
// }



/* <div class="flex alignItems column">


<img src="<%= image %>" id ='player1' >
<meter id="health" value = '<%= data.servant[0].hpMax %>.00' min = '0.00' max = '<%= data.servant[0].hpMax %>.00' ></meter>
<meter id ='np' value = '0.00' min = '0.00' max = '100.00'></meter>

<div class="flex justifyContent" id = 'skills'>
    <button class = 'button'  id ='skill1'><img src="<%= skill1[data.index].servant[0].image %>" ></button>
    <button class = 'button'  id ='skill2'><img src="<%= skill2[data.index].servant[0].image %>" ></button>
    <button class = 'button'  id ='skill3'><img src="<%= skill3[data.index].servant[0].image %>" ></button>
</div>

</div> */
