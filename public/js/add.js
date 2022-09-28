// async function getData(){

//     let response = await fetch(`https://api.atlasacademy.io/export/NA/nice_servant_lore.json`)
//     let data = await response.json()

//     for(let i = 0; i<data.length -5; i++){
    // const ascension1 = await cloudinary.uploader.upload(data[i].extraAssets.charaGraph.ascension[1]);
    // const ascension2 = await cloudinary.uploader.upload(data[i].extraAssets.charaGraph.ascension[2]);
    // const ascension3 = await cloudinary.uploader.upload(data[i].extraAssets.charaGraph.ascension[3]);
    // const ascension4 = await cloudinary.uploader.upload(data[i].extraAssets.charaGraph.ascension[4]);

//     const skill1 = await cloudinary.uploader.upload(data[i].skills[data[i].skills.length-3].icon);
//     const skill2 = await cloudinary.uploader.upload(data[i].skills[data[i].skills.length-2].icon);
//     const skill3 = await cloudinary.uploader.upload(data[i].skills[data[i].skills.length-1].icon);

//     const appendskill1 = await cloudinary.uploader.upload(data[i].appendPassive[0].skill.icon);
//     const appendskill2 = await cloudinary.uploader.upload(data[i].appendPassive[1].skill.icon);
//     const appendskill3 = await cloudinary.uploader.upload(data[i].appendPassive[2].skill.icon);

    // const noblephantasm = await cloudinary.uploader.upload(data[i].noblePhantasms[data[i].noblePhantasms.length-1].icon);
    //  req.body.servant = {
    // starAbsorb : data[i].starAbsorb, 
    // starGen : data[i].starGen, 
    // collectionNo : data[i].collectionNo, 
    // attribute : data[i].attribute, 
    // instantDeathChance : data[i].instantDeathChance, 
    // className : data[i].className, 
    // gender : data[i].gender, 
    // name : data[i].name, 
    // battleName : data[i].battleName, 
    // cost : data[i].cost, 
    // cards : data[i].cards, 
    // atkMax : data[i].atkMax, 
    // hpMax : data[i].hpMax, 
    // atkGrowth : data[i].atkGrowth, 
    // hpGrowth : data[i].hpGrowth, 
    // lvMax : data[i].ascensionAdd.lvMax.ascension,
    // stats: data[i].profile.stats, 
    // user: req.user.id,
        // noblePhantasms:{
        //     icon: noblephantasm.secure_url,
        //     cloudinaryId: noblephantasm.public_id,
        //     detail: data[i].noblePhantasms[data[i].noblePhantasms.length-1].detail,
        //     type: data[i].noblePhantasms[data[i].noblePhantasms.length-1].type,
        //     effectFlags: data[i].noblePhantasms[data[i].noblePhantasms.length-1].effectFlags[0],
        //     svals: data[i].noblePhantasms[data[i].noblePhantasms.length-1].functions[0].svals,
        //     funcType: data[i].noblePhantasms[data[i].noblePhantasms.length-1].functions[0].funcType,
        //     name: data[i].noblePhantasms[data[i].noblePhantasms.length-1].name,
        //     rank: data[i].noblePhantasms[data[i].noblePhantasms.length-1].rank,
        // },
        // skills:{
        //     skills1:{
        //         coolDown : data[i].skills[data[i].skills.length-3].coolDown,
        //         detail : data[i].skills[data[i].skills.length-3].detail,
        //         icon : skill1.secure_url,
        //         cloudinaryId: skill1.public_id,
        //         funcPopupText : data[i].skills[data[i].skills.length-3].functions[0].funcPopupText,
        //         funcTargetTeam : data[i].skills[data[i].skills.length-3].functions[0].funcTargetTeam,
        //         funcTargetType : data[i].skills[data[i].skills.length-3].functions[0].funcTargetType,
        //         funcType : data[i].skills[data[i].skills.length-3].functions[0].funcType,
        //         svals : data[i].skills[data[i].skills.length-3].functions[0].svals,
        //      },
        //     skills2:{
        //         coolDown : data[i].skills[data[i].skills.length-2].coolDown,
        //         detail : data[i].skills[data[i].skills.length-2].detail,
        //         icon : skill2.secure_url,
        //         cloudinaryId: skill2.public_id,
        //         funcPopupText : data[i].skills[data[i].skills.length-2].functions[0].funcPopupText,
        //         funcTargetTeam : data[i].skills[data[i].skills.length-2].functions[0].funcTargetTeam,
        //         funcTargetType : data[i].skills[data[i].skills.length-2].functions[0].funcTargetType,
        //         funcType : data[i].skills[data[i].skills.length-2].functions[0].funcType,
        //         svals : data[i].skills[data[i].skills.length-2].functions[0].svals,
        //      },
        //     skills3:{
        //        coolDown : data[i].skills[data[i].skills.length-1].coolDown,
        //        detail : data[i].skills[data[i].skills.length-1].detail,
        //        icon : skill3.secure_url,
        //        cloudinaryId: skill3.public_id,
        //        funcPopupText : data[i].skills[data[i].skills.length-1].functions[0].funcPopupText,
        //        funcTargetTeam : data[i].skills[data[i].skills.length-1].functions[0].funcTargetTeam,
        //        funcTargetType : data[i].skills[data[i].skills.length-1].functions[0].funcTargetType,
        //        funcType : data[i].skills[data[i].skills.length-1].functions[0].funcType,
        //        svals : data[i].skills[data[i].skills.length-1].functions[0].svals,
        //     }
        // },
//         ascensions:{
//            1: ascension1.secure_url,
//            2: ascension2.secure_url,
//            3: ascension3.secure_url,
//            4: ascension4.secure_url,
//         },
        // appendPassive:{
        //     appendPassive0:{
        //         icon: appendskill1.secure_url,
        //         cloudinaryId: appendskill1.public_id,
        //         name: data[i].appendPassive[0].skill.name,
        //         detail: data[i].appendPassive[0].skill.unmodifiedDetail,
        //     },
        //     appendPassive2:{
        //         icon: appendskill2.secure_url,
        //         cloudinaryId: appendskill2.public_id,
        //         name: data[i].appendPassive[1].skill.name,
        //         detail: data[i].appendPassive[1].skill.unmodifiedDetail,
        //     },
        //     appendPassive3:{
        //         icon: appendskill3.secure_url,
        //         cloudinaryId: appendskill3.public_id,
        //         name: data[i].appendPassive[2].skill.name,
        //         detail: data[i].appendPassive[2].skill.unmodifiedDetail,
        //     }
        // }
//     }


// for(let ele = 0;ele < data[i].profile.voices.length;ele++){
//     for(let element = 0;element<data[i].profile.voices[ele].voiceLines.length;element++){
//      try{
//         const voice = await cloudinary.uploader.upload(data[i].profile.voices[ele].voiceLines[element].audioAssets[0],  { resource_type: "auto" });
//         req.body.voices = {
//             audio: voice.secure_url,
//             cloudinaryId: voice.public_id,
//             name: data[i].profile.voices[ele].voiceLines[element].name,
//             subtitle: data[i].profile.voices[ele].voiceLines[element].subtitle,
//         }
//      }catch(err){
//         console.error(err)
//      }
//     }

// }
    

    // for(let ele = 0;ele< data[i].classPassive.length; ele++){
    //     const classpassive = await cloudinary.uploader.upload(data[i].classPassive[ele].icon);
    //     req.body.classPassive = {
    //         audio: classpassive.secure_url,
    //         cloudinaryId: classpassive.public_id,
    //         name: data[i].classPassive[ele].name,
    //         detail: data[i].classPassive[ele].unmodifiedDetail
    //     }
        
    // }
// }


let alphabet = 'abcdefghijklmnopqrstuvwxyz'

for(let i = 0;i < alphabet.length; i++){
document.querySelector(`.filter-${alphabet[i]}`).addEventListener('click',function filterByAlphabet(){

  
   let servantSplit = splitClass()

servantSplit.forEach(ele=>{
    document.querySelector(`.${ele}`).classList.remove('hidden')
})

servantSplit.forEach(ele=>{
    if(ele[0].toLowerCase()!==alphabet[i]){
        document.querySelector(`.${ele}`).classList.add('hidden')
    }else{
        document.querySelector(`.${ele}`).classList.remove('hidden')
    }
})

})
}



function splitClass(){
    const splitClass = document.querySelectorAll('.form')
    return Array.from(splitClass).map((element)=>{
    let servantName = element.classList[1]
    

    return servantName.split('').map(ele=>{ 
        if(ele !== ' ' && ele !== '.' && ele !== '-' && ele !== '(' && ele !== ')' && ele !== "'" && ele !== '&' && ele !== '=' && ele !== "\"" && ele !== "\/"){
    return ele
  }else{
         return ''
 }
    }).join('')
    

    })

}


document.querySelector('#letter').addEventListener('click',function filterByLetter(){
    document.querySelector('.buttons').classList.remove('hidden')
})


document.querySelector('#servantClass').addEventListener('click',function filterByServantClass(){
    document.querySelector('.servantClass').classList.remove('hidden')
})

document.querySelector('#clear').addEventListener('click',function clearFilters(){
    const splitClass = document.querySelectorAll('.form')
    return Array.from(splitClass).map((element)=>{
        element.classList.remove('hidden')
    })
})

let servantClass = ['saber','archer','lancer','rider','assassin','caster','shielder','avenger','alterego','ruler','berserker']

for(let i = 0; i < servantClass.length ; i++){
    document.querySelector(`.${servantClass[i]}`).addEventListener('click',function filterByClass(){
        let servantSplit = splitClass()

servantSplit.forEach(ele=>{
    document.querySelector(`.${ele}`).classList.remove('hidden')
}) 

servantSplit.forEach(ele=>{
    if(ele.split('_')[1].toLowerCase() !== servantClass[i]){
        document.querySelector(`.${ele}`).classList.add('hidden')
    }else{
        document.querySelector(`.${ele}`).classList.remove('hidden')
    }
})

    })
}

for(let i = 0; i< 6; i++){
    document.querySelector(`.rarity_${i}`).addEventListener('click',function filterByRarity(){
        let splited = document.querySelectorAll('.form')
        splited = Array.from(splited).map((element)=>{
            return element.classList[2]
        })

        

        splited.forEach(ele=>{
            if(ele.split('_')[1] !== i.toString()){
                document.querySelector(`.${ele}`).classList.add('hidden')
            }else{
                document.querySelector(`.${ele}`).classList.remove('hidden')
            }
        })
    })
}