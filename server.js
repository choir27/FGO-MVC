const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
    const PORT = 8000
const cors = require('cors')
const fs = require('fs')
require('dotenv').config()
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));

let db,
    dbName = 'servants'

MongoClient.connect(process.env.DATABASE_URL, { useUnifiedTopology: true })
    .then(client => {

        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })
    
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.static('views'))
app.use(express.static('audio'))
app.use(express.static('image'))
app.use(express.static('image/add'))
app.use(express.static('image/home'))
app.use(express.static('image/simulator'))

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get('/',(request, response)=>{
    db.collection('servants').find().toArray()
    .then(data =>{
        response.render('home.ejs', {info: data})
    })
    .catch(err => console.error(err))
})

app.get('/servants',(request, response)=>{
    db.collection('servants').find().toArray()
    .then(data =>{
        response.render('servants.ejs', {info: data})
    })
    .catch(err => console.error(err))
})



app.get('/add',(request, response)=>{
    db.collection('servants').find().toArray()
    .then(data => {
        response.render('add.ejs', { info: data })
    })
    .catch(error => console.error(error))
})

app.get('/simulator',(request, response)=>{
    db.collection('servants').find().toArray()
    .then(data => {
        response.render('simulator.ejs', { data })
    })
    .catch(error => console.error(error))
})


app.get('/gameplay',(request, response)=>{
    db.collection('servants').find().toArray()
    .then(data =>{
        response.render('gameplay.ejs', {info: data})
    })
    .catch(err => console.error(err))
})


app.get('/api/:servants',(request,response)=>{
    db.collection('servants').find().toArray()
    .then(data => {
     response.json(data)
   })
    .catch(error => console.error(error))
})



app.get('/home/:id', async(request, response)=>{
    db.collection('servants').find().toArray()
        .then(result => {
                    let query = request.params.id // Your lookup to find Kiruya's data.  In this, req.params.id would be helpful.
                    for(let i = 0;i<result.length;i++){
                       if(result[i].servant.name.toLowerCase()===query){
                       let info = result[i]
                        response.render('template.ejs', {info})
                       }
                    }
                }).catch(error=>console.error(error))     
})

app.post('/simulator', (request, response) => {
    db.collection('simulator').insertOne({text: request.body.text})
    .then(result => {
response.redirect('/simulator')
    })
    .catch(error => console.error(error))
})



app.post('/servants', (request, response) => {
    fetch('https://api.atlasacademy.io/export/JP/nice_servant_lore_lang_en.json')
        .then(res=>res.json())
        .then(data=>{
            let index = 0
            for(let i = 0; i < data.length; i++) {
                let splitBySpace = data[i].name.split(' ')
                let splitByHyphen = data[i].name.split('-')

                if((splitByHyphen[0] === request.body.firstName || splitBySpace[0] === request.body.firstName) && request.body.servantClass.toLowerCase() === data[i].className) {
                 index = i
        
             break;
                }
            }
    db.collection('servants').insertOne({servant : data[index]})
        .then(result => {
            response.redirect('/servants')
                 }).catch(error => console.error(error))
}).catch(error => console.error(error))
})


app.listen(process.env.PORT || PORT, ()=>{  
    console.log(`Server running on port ${PORT}`)
})