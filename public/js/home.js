
let check0 = document.querySelector('.check0')
let check1 = document.querySelector('.check1')
let check2 = document.querySelector('.check2')
let check3 = document.querySelector('.check3')

if(check0 !== null){

document.querySelector('.arrow-down').addEventListener('click',scrollDown)
document.querySelector('.arrow-down1').addEventListener('click',scrollDown1)
document.querySelector('.arrow-down2').addEventListener('click',scrollDown2)
document.querySelector('.arrow-down3').addEventListener('click',scrollDown3)
document.querySelector('.arrow-down4').addEventListener('click',scrollDown4)


function scrollDown(){
   window.scrollTo({ top: 750, behavior: 'smooth' })
}

function scrollDown1(){
   window.scrollTo({ top: 1170, behavior: 'smooth' })
}

function scrollDown2(){
   window.scrollTo({ top: 1890, behavior: 'smooth' })
}

function scrollDown3(){
   window.scrollTo({ top: 2590, behavior: 'smooth' })
}

function scrollDown4(){
   window.scrollTo({ top: 3875, behavior: 'smooth' })
}

}

let check = 6
document.querySelector('#show').addEventListener('click',function showMore(){
for(let i = 3;i<check;i++){
   if(document.querySelector(`.check${i}`)!=null){
      document.querySelector(`.check${i}`).classList.remove('hidden')

   }
}

check += 3

})

document.querySelector('#hide').addEventListener('click',function showMore(){
   if(check > 3){
      for(let i = check;i>check-3;i--){
         if(document.querySelector(`.check${i}`)!=null){
            document.querySelector(`.check${i}`).classList.add('hidden')
      
         }
      }
   }
   
   check -= 3
   
   })