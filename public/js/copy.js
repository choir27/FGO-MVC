// let url = 'https://fgo-api.herokuapp.com/api/servants'

// fetch(url)
//     .then(res=>res.json())
//     .then(data=>{
//             console.log(data)
//        })
//     .catch(err => {console.error(err)})

    const deleteText = document.querySelectorAll('.delete')

Array.from(deleteText).forEach((element)=>{
    element.addEventListener('click', deleteServant)
})


async function deleteServant(){

let confirmation = confirm('Are you sure you want to delete this?')

if(confirmation){
  let info = this.parentNode.parentNode.parentNode.childNodes[1].childNodes
  let stats = this.parentNode.parentNode.parentNode.childNodes[5].childNodes

  const servantName = info[3].innerText
  const servantClass = info[7].innerText
  const servantImage =  this.parentNode.parentNode.parentNode.childNodes[3]
  const rarity = info[11].innerText
  const attack = stats[5].innerText
  const attackMax = stats[9].innerText
  const attackGrail = stats[13].innerText
  const health = stats[17].innerText
  const healthMax = stats[21].innerText
  const healthGrail = stats[25].innerText
  const cost = stats[29].innerText

    try{
      const response = await fetch('deleteServant', {
          method: 'delete',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': servantName,
            'class': servantClass,
            'image': servantImage,
            'rarity': rarity,
            'attack': attack,
            'attackMax' : attackMax,
            'attackGrail' : attackGrail,
            'health': health,
            'healthMax': healthMax,
            'healthGrail': healthGrail,
            'cost' : cost
          })
        })
      const data = await response.json()
      location.reload()

  }catch(err){
      console.log(err)
  }
}

   
}

const thumbText = document.querySelectorAll('.likes')


Array.from(thumbText).forEach((element)=>{
    element.addEventListener('click', addLike)
})

async function addLike(){
  let info = this.parentNode.parentNode.parentNode.childNodes[1].childNodes
  let stats = this.parentNode.parentNode.parentNode.childNodes[5].childNodes

    const servantName = info[3].innerText
    const servantClass = info[7].innerText
    const servantImage = this.parentNode.parentNode.parentNode.childNodes[3].src.split('/')[3]
    const rarity = info[11].innerText
    const attack = stats[5].innerText
    const attackMax = stats[9].innerText
    const attackGrail = stats[13].innerText
    const health = stats[17].innerText
    const healthMax = stats[21].innerText
    const healthGrail = stats[25].innerText
    const cost = stats[29].innerText
    const likes =  Number(this.parentNode.childNodes[4].innerText)

        try{
            const response = await fetch('addOneLike', {
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    'name': servantName,
                    'class': servantClass,
                    'image': servantImage,
                    'rarity': rarity,
                    'attack': attack,
                    'attackMax' : attackMax,
                    'attackGrail' : attackGrail,
                    'health': health,
                    'healthMax': healthMax,
                    'healthGrail': healthGrail,
                    'cost' : cost,
                    'likes': likes
                })
              })
            const data = await response.json()
            console.log(data)
            location.reload()
    
        }catch(err){
            console.log(err)
        }
    }
