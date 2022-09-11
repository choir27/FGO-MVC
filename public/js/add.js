fetch('https://fgo-app.herokuapp.com/user/api/servants')
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })

// <!-- <div class = 'flex column alignItems data'>
// <h1 class = 'flex justifyContent'>Add Servant Data</h1>
// <span>Enter in information regarding Fate Grand Servants below and submit the data once everything is filled out.</span>

// <span>Use the link below to access the added servant data API</span>
// <code><pre>https://fgo-app.herokuapp.com/api/servants</pre></code>
// </div>

// <form action = '/user/servants' method = "POST" class = 'flex alignItems column'>
// <div class = 'flex'>
// <input required="required" type = 'text' name = 'firstName' placeholder="First Name">
// <input type = 'text' name = 'middleName' placeholder="Middle Name">
// <input type = 'text' name = 'lastName' placeholder="Last Name">

// </div>

// <div class = 'flex alignItems'>
// <div class ='flex alignItems column'>

// <h2>Status:</h2>
// <select name="status">
// <option value="public" selected>Public</option>
// <option value="private">Private</option>
// </select>
// </div>
// <div class ='flex alignItems column'>
// <h2>Pick Ascension Art to Show:</h2>
// <select name="ascension">
//     <option value="1" selected>1</option>
//     <option value="2">2</option>
//     <option value="3">3</option>
//     <option value="4">4</option>
// </select>
// </div> 
// </div>

// <div class = 'flex justifyContent'>
// <input required='required' type = 'text' name = 'servantClass' placeholder="Servant Class">
// </div>


// <div class = 'flex row alignItems'>
// <input requird = 'required' type = 'text' name = 'gender' placeholder="Gender">
// <div class="alignItems column flex">
// <h2>Pick Rarity of Servant:</h2>
// <select name="rarity">
// <option value="1" selected>1</option>
// <option value="2">2</option>
// <option value="3">3</option>
// <option value="4">4</option>
// <option value="5">5</option>

// </select>
// </div>
// </div>



// <button type = 'submit' class = 'button'>Submit</button>

// </form> -->

// <% let url = info[i].servant[0].image.split('/')%>
// <% let newUrl = url.map((ele,i)=>{ %>
//    <% if(url.indexOf(ele) == url.length-1){ %>
//        <% return 'choose-servant/' + ele %>
//     <% }else{ %>
//        <% return ele %>
//    <% } %>
// <%  }).join('/') %>