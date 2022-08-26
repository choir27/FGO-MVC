

document.querySelector(`.link1`).addEventListener('click',showTab)


function showTab(){
    for(let i = 1; i < 6; i++){
        document.querySelector(`#tab${i}`).classList.add('hidden')
    }
   document.querySelector(`#tab1`).classList.remove('hidden')
}


document.querySelector(`.link2`).addEventListener('click',showTab2)


function showTab2(){
    for(let i = 1; i < 6; i++){
        document.querySelector(`#tab${i}`).classList.add('hidden')
    }
   document.querySelector(`#tab2`).classList.remove('hidden')
}

document.querySelector(`.link3`).addEventListener('click',showTab3)


function showTab3(){
    for(let i = 1; i < 6; i++){
        document.querySelector(`#tab${i}`).classList.add('hidden')
    }
   document.querySelector(`#tab3`).classList.remove('hidden')
}

document.querySelector(`.link4`).addEventListener('click',showTab4)


function showTab4(){
    for(let i = 1; i < 6; i++){
        document.querySelector(`#tab${i}`).classList.add('hidden')
    }
   document.querySelector(`#tab4`).classList.remove('hidden')
}


if(document.querySelector(`.link5`) !== null && document.querySelector(`#tab5`) !== null){

document.querySelector(`.link5`).addEventListener('click',showTab5)


function showTab5(){
    for(let i = 1; i < 6; i++){
        document.querySelector(`#tab${i}`).classList.add('hidden')
    }
   document.querySelector(`#tab5`).classList.remove('hidden')
}

}

//  <% let ascension = 1 %>
// <% for(let keys in info.servant.extraAssets.charaGraph.ascension) { %>
//  <% if(keys !== 1) { %>
//  <div id = 'tab<%=ascension%>' class = 'hidden'>
//  <img src = '<%=info.servant.extraAssets.charaGraph.ascension[keys] %>'>
//  </div>
//  <button class ='link<%= ascension %>'>Ascension <%=ascension%></button>
//  <% ascension+=1 %>
//  <% } %>
//  <% } %>

//  <% for(let keys in info.servant.extraAssets.charaGraph.costume) { %>
//      <button class ='link<%= ascension %>'>Ascension <%=ascension%></button>

//    <% if(info.servant.extraAssets.charaGraph.costume[keys] !== null || info.servant.extraAssets.charaGraph.costume[keys] !== undefined){ %>
//      <div id = 'tab<%=ascension%>' class = 'hidden'>
//    <img src = '<%=info.servant.extraAssets.charaGraph.costume[keys] %>'>
//      </div>
//    <% } %>

//    <% } %>