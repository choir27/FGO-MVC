document.querySelector('.arrow-down').addEventListener('click',scrollDown)
document.querySelector('.arrow-down1').addEventListener('click',scrollDown1)
document.querySelector('.arrow-down2').addEventListener('click',scrollDown2)
document.querySelector('.arrow-down3').addEventListener('click',scrollDown3)
document.querySelector('.arrow-down4').addEventListener('click',scrollDown4)

function scrollDown(){
   window.scrollTo({ top: 800, behavior: 'smooth' })
}

function scrollDown1(){
   window.scrollTo({ top: 1600, behavior: 'smooth' })
}

function scrollDown2(){
   window.scrollTo({ top: 2160, behavior: 'smooth' })
}

function scrollDown3(){
   window.scrollTo({ top: 2875, behavior: 'smooth' })
}

function scrollDown4(){
   window.scrollTo({ top: 3875, behavior: 'smooth' })
}