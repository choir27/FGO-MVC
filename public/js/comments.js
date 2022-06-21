const deleteText = document.querySelectorAll('.delete')

Array.from(deleteText).forEach((element)=>{
    element.addEventListener('click', deleteServant)
})


async function deleteServant(){

// let confirmation = confirm('Are you sure you want to delete this?')

// if(confirmation){
  let info = this.parentNode.parentNode.parentNode.childNodes   
  const comments = info[3].innerText
  console.log(comments)

    try{
      const response = await fetch('deleteComment', {
          method: 'delete',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'comments': comments
          })
        })
      const data = await response.json()
      location.reload()

  }catch(err){
      console.error(err)
  }
}

   
// }

// const thumbText = document.querySelectorAll('.likes')


// Array.from(thumbText).forEach((element)=>{
//     element.addEventListener('click', addLike)
// })

// async function addLike(){
//   let info = this.parentNode
//   let stats = this.parentNode

 

//         try{
//             const response = await fetch('addOneLike', {
//                 method: 'put',
//                 headers: {'Content-Type': 'application/json'},
//                 body: JSON.stringify({
                   
//                 })
//               })
//             const data = await response.json()
//             console.log(data)
//             location.reload()
    
//         }catch(err){
//             console.log(err)
//         }
//     }
