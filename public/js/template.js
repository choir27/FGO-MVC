

document.querySelector(`.link1`).addEventListener('click',showTab)


function showTab(){
    for(let i = 1; i < 5; i++){
        document.querySelector(`#tab${i}`).classList.add('hidden')
    }
    if(document.querySelector(`.link5`) !== null && document.querySelector(`#tab5`) !== null){
        document.querySelector(`#tab5`).classList.add('hidden')
    }
   document.querySelector(`#tab1`).classList.remove('hidden')
}


document.querySelector(`.link2`).addEventListener('click',showTab2)


function showTab2(){
    for(let i = 1; i < 5; i++){
        document.querySelector(`#tab${i}`).classList.add('hidden')
    }
    if(document.querySelector(`.link5`) !== null && document.querySelector(`#tab5`) !== null){
        document.querySelector(`#tab5`).classList.add('hidden')
    }
   document.querySelector(`#tab2`).classList.remove('hidden')
}

document.querySelector(`.link3`).addEventListener('click',showTab3)


function showTab3(){
    for(let i = 1; i < 5; i++){
        document.querySelector(`#tab${i}`).classList.add('hidden')
    }
    if(document.querySelector(`.link5`) !== null && document.querySelector(`#tab5`) !== null){
        document.querySelector(`#tab5`).classList.add('hidden')
    }
   document.querySelector(`#tab3`).classList.remove('hidden')
}

document.querySelector(`.link4`).addEventListener('click',showTab4)


function showTab4(){
    for(let i = 1; i < 5; i++){
        document.querySelector(`#tab${i}`).classList.add('hidden')
    }
    if(document.querySelector(`.link5`) !== null && document.querySelector(`#tab5`) !== null){
        document.querySelector(`#tab5`).classList.add('hidden')
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

/*
<% for(let i=0;i< info.servant.appendPassive.length;i++) { %>
  <h2><%= info.servant.appendPassive[i].skill.name %></h2>
<img src = '<%= info.servant.appendPassive[i].skill.icon %>'>
  <% } %>
 <section class = 'flex column alignItems'>

  <article class = 'flex ascension'>
    <% for(let i = 0; i< info.servant.skills.length; i++) { %>
      <h2><%= info.servant.skills[i].name %></h2>
      <img src = '<%= info.servant.skills[i].icon %>'>
      <% let array = [] %>
      <% for(let index = 0;index < info.servant.skills[i].coolDown.length; index++) { %>
        <% if(array.indexOf(info.servant.skills[i].coolDown[index]) === -1) { %>
              <% array.push(info.servant.skills[i].coolDown[index]) %>
              <h2><%= info.servant.skills[i].coolDown[index] %></h2>
          <% } %>
          <% } %>
      <% } %>
      </article>



  



  <article class = 'ascension flex'>
    <% for(let keys in info.servant.extraAssets.charaFigure.story) { %>
      <% if(info.servant.extraAssets.charaFigure.story[keys] !== null || info.servant.extraAssets.charaFigure.story[keys] !== undefined) { %>
      <img src = '<%=info.servant.extraAssets.charaFigure.story[keys] %>'>
      <% } %>
      <% } %>

  <% for(let keys in info.servant.extraAssets.charaFigure.ascension){ %>
    <img src = '<%= info.servant.extraAssets.charaFigure.ascension[keys] %>'>
  <% } %>

</article>


<article>
  <% for(let keys in info.servant.extraAssets.commands.ascension){ %>
    <img src = '<%= info.servant.extraAssets.commands.ascension[keys] %>'>
  <% } %>


  <% for(let keys in info.servant.extraAssets.commands.costume){ %>
    <% if(info.servant.extraAssets.commands.costume[keys] !== null || info.servant.extraAssets.commands.costume[keys] !== undefined) { %>
    <img src = '<%= info.servant.extraAssets.commands.costume[keys] %>'>
    <% } %>
  <% } %>
</article>


<% for(let keys in info.servant.extraAssets.status.ascension){ %>
  <img src = '<%= info.servant.extraAssets.status.ascension[keys] %>'>
<% } %>



<section>
<% for(let o = 0; o< info.servant.profile.voices.length; o++){ %>
  <% for(let i = 0; i< info.servant.profile.voices[o].voiceLines.length; i++) { %>
    <h2><%= info.servant.profile.voices[o].voiceLines[i].name %></h2>
    <audio class = 'audio' controls src = '<%= info.servant.profile.voices[o].voiceLines[i].audioAssets[0] %>'></audio>
  <% } %>
  <% } %>
  </section>


  <article>
    <% info.servant.classPassive.forEach(ele=>{ %>
      <h3> <%= ele.name %></h3>
      <img src = '<%= ele.icon %>'>
    <% }) %>
  </article>
<% let lastindex = info.servant.noblePhantasms[0].individuality.length %>
<h2><%= info.servant.noblePhantasms[0].card %></h2>
<img src = '<%= info.servant.noblePhantasms[0].icon %>'>
<h2><%= info.servant.noblePhantasms[0].name %></h2>
<h2><%= info.servant.noblePhantasms[0].rank %></h2>
<h2><%= info.servant.noblePhantasms[1].card %></h2>
<img src = '<%= info.servant.noblePhantasms[1].icon %>'>
<h2><%= info.servant.noblePhantasms[1].name %></h2>
<h2><%= info.servant.noblePhantasms[1].rank %></h2>

<h2><%= info.servant.coin.item.name%></h2>
<img src = '<%= info.servant.coin.item.icon %>'>




</section> -->
<!-- 
appendSkillMaterials: {1: {…}, 2: {…}, 3: {…}, 4: {…}, 5: {…}, 6: {…}, 7: {…}, 8: {…}, 9: {…}}
ascensionMaterials: {0: {…}, 1: {…}, 2: {…}, 3: {…}}
skillMaterials: {1: {…}, 2: {…}, 3: {…}, 4: {…}, 5: {…}, 6: {…}, 7: {…}, 8: {…}, 9: {…}}
traits: (15) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
 */
