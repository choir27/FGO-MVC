fetch('https://api.atlasacademy.io/export/JP/nice_servant_lore_lang_en.json')
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })