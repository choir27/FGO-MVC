const deleteBtn = document.querySelectorAll('.del')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteServant)
})

async function deleteServant(){
    const todoId = this.parentNode.dataset.id
    console.log(todoId)
    try{
        const response = await fetch('delete', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        location.reload()
    }catch(err){
        console.error(err)
    }
}