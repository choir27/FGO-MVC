// <% let check = 0 %>
           
     
//             <% for(let i =0; i < info1.length; i++) { %>
              

//                 <% if(info1[i].user._id==userID) { %>

//                     <% check +=1 %>
// <% let className = info[i].servant[0].className.split('').map(ele => { %>
//    <% if(ele === ele.toUpperCase()) { %>
//       <% return ' ' + ele %>
//        <% } %>
//    <% if(ele != ele.toUpperCase()) { %>
//       <% return ele %>
//        <% } %>
// <% }).join('') %>

{/* <div href = '/user/<%= info1[i]._id %>' class = 'flex alignItems justifyContent button'> 
<div class="flex alignItems justifyContent column edit-delete">
            <a href = '/user/edit/<%= info1[i]._id %>' class = 'button edit flex justifyContent'><i class="fa-solid fa-pen"></i></a>

            <form action="/user/delete/<%= info1[i]._id  %>?_method=DELETE" method="POST" class ='flex justifyContent'>    
            <button class="button btn-primary fa fa-trash" type="submit"></button>
            </form>

        </div>
// <% } else if(!info[i].servant[0] && info[i].user._id==userID) { %>   */}
//    <% check +=1 %>
//    <div class = 'flex alignItems justifyContent button'> 
//        <div class ='edit-delete' data-id = '<%= info[i]._id %>'>
//        <a href = '/user/edit/<%= info[i]._id %>'><i class="fa-solid fa-pen"></i></a>
       
//        <i class="fas fa-trash del"></i>
//        </div>
//        <h2>The servant you added couldn't be found</h2>

//    </div>
// <% } %>

// <% } %>

// <% if(check == 0) { %>
//    <h2>No Servants have been added yet</h2>
// <% } %>

document.querySelector('.arrow-down').addEventListener('click',scrollDown)
document.querySelector('.arrow-down1').addEventListener('click',scrollDown1)
document.querySelector('.arrow-down2').addEventListener('click',scrollDown2)
document.querySelector('.arrow-down3').addEventListener('click',scrollDown3)
document.querySelector('.arrow-down4').addEventListener('click',scrollDown4)

function scrollDown(){
   window.scrollTo({ top: 700, behavior: 'smooth' })
}

function scrollDown1(){
   window.scrollTo({ top: 1400, behavior: 'smooth' })
}

function scrollDown2(){
   window.scrollTo({ top: 2140, behavior: 'smooth' })
}

function scrollDown3(){
   window.scrollTo({ top: 2875, behavior: 'smooth' })
}

function scrollDown4(){
   window.scrollTo({ top: 3875, behavior: 'smooth' })
}