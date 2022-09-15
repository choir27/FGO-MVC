// fetch('https://fgo-app.herokuapp.com/api/servants')
//     .then(res=>res.json())
//     .then(data=>{
//         for(let i =0;i<data.info.length;i++){

//             document.querySelector(`.select-${i}`).addEventListener('click',function getServant(){
//                 resetBorder()
//                 document.querySelector(`.select-${i}`).style.border = '3px solid red'
//                document.querySelector('#name').setAttribute('value',data.info[i].servant[0].name)
//                document.querySelector('#rarity').setAttribute('value',data.info[i].servant[0].rarity)
//                document.querySelector('#gender').setAttribute('value',data.info[i].servant[0].gender)
//                document.querySelector('#className').setAttribute('value',data.info[i].servant[0].className)
//                document.querySelector('#image').setAttribute('src',data.info[i].servant[0].image)
//                document.querySelector('#servantName').innerText = data.info[i].servant[0].name
//                document.querySelector('#servantClass').innerText = data.info[i].servant[0].className
//                document.querySelector('#servantRarity').innerText = data.info[i].servant[0].rarity

//                document.querySelector('#skill1').setAttribute('src',data.skill1[i].servant[0].image)
//                document.querySelector('#skill2').setAttribute('src',data.skill2[i].servant[0].image)
//                document.querySelector('#skill3').setAttribute('src',data.skill3[i].servant[0].image)

//                document.querySelector('#skillName1').setAttribute('value',data.skill1[i].servant[0].skillName)
//                document.querySelector('#skillName2').setAttribute('value',data.skill2[i].servant[0].skillName)
//                document.querySelector('#skillName3').setAttribute('value',data.skill3[i].servant[0].skillName)

//                document.querySelector('#skillCooldown1').setAttribute('value',data.skill1[i].servant[0].skillCooldown)
//                document.querySelector('#skillCooldown2').setAttribute('value',data.skill2[i].servant[0].skillCooldown)
//                document.querySelector('#skillCooldown3').setAttribute('value',data.skill3[i].servant[0].skillCooldown)

//                document.querySelector('#appendSkill1').setAttribute('src',data.appendskill1[i].servant[0].image)
//                document.querySelector('#appendSkill2').setAttribute('src',data.appendskill2[i].servant[0].image)
//                document.querySelector('#appendSkill3').setAttribute('src',data.appendskill3[i].servant[0].image)

//                document.querySelector('#index').setAttribute('value',i)
            
//             })
//         }
    

//         function resetBorder(){
//             for(let i =0;i<data.length;i++){
//                 document.querySelector(`.select-${i}`).style.border = '3px solid rgba(39, 40, 51, 0.965)'
//             }
//         }
        
//     })



