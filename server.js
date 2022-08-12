const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 8000
const cors = require('cors')
const fs = require('fs')
require('dotenv').config()

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
    .then(data => {
        response.render('index.ejs', { info: data })
    })
    .catch(error => console.error(error))
})

app.get('/fate',(request, response)=>{
    db.collection('servants').find().toArray()
    .then(data => {
        response.render('fgo-simulator.ejs', { info: data })
    })
    .catch(error => console.error(error))
})


app.get('/api/:servants',(request,response)=>{
    db.collection('servants').find().toArray()
    .then(data => {
     response.json(data)
   })
    .catch(error => console.error(error))
})




app.post('/comments', (request,response)=>{
    db.collection('servants').insertOne({
})
        .then(result => {
            response.redirect('/data/comments')

        })
    .catch(error => console.error(error))
})

app.post('/servants', (request, response) => {
    db.collection('servants').insertOne({firstName: request.body.firstName, lastName: request.body.lastName,
    image: request.body.image, gender: request.body.gender, servantID: request.body.servantID, servantClass: request.body.servantClass,
    attack: request.body.attack, health: request.body.health, cost: request.body.cost, rarity: request.body.rarity, likes: 0
})
    .then(result => {
response.redirect('/')
    })
    .catch(error => console.error(error))
})

app.put('/addOneLike', (request, response) => {
    db.collection('servants').updateOne({firstName: request.body.firstName, lastName: request.body.lastName,
        image: request.body.image, gender: request.body.gender, servantID: request.body.servantID, servantClass: request.body.servantClass,
        attack: request.body.attack, health: request.body.health, cost: request.body.cost, rarity: request.body.rarity, likes: request.body.likes
    },{
            $set: {
                likes:request.body.likes + 1
              }
        },{
            sort: {_id: -1},
            upsert: true
        })
        .then(result => {
            console.log('Added One Like')
            response.json('Like Added')
        })
        .catch(error => console.error(error))
    })

app.delete('/deleteServant', (request, response) => {
    db.collection('servants').deleteOne({firstName: request.body.firstName})
    .then(result => {
        response.json('Servant Deleted')
    })
    .catch(error => console.error(error))
})


app.get('/data/comments',(request, response)=>{
    db.collection('servants').find().toArray()
    .then(data =>{
        response.render('comments.ejs', {info: data})
    })
    .catch(err => console.error(err))
})

app.delete('/data/deleteComment', (request, response) => {
    db.collection('servants').deleteOne({comments: request.body.comments})
    .then(result => {
        response.json('Comment Deleted')
    })
    .catch(error => console.error(error))
})

app.put('/data/addCommentLike', (request, response) => {
    db.collection('servants').updateOne({firstName: request.body.firstName, lastName: request.body.lastName,
        image: request.body.image, gender: request.body.gender, servantID: request.body.servantID, servantClass: request.body.servantClass,
        attack: request.body.attack, health: request.body.health, cost: request.body.cost, rarity: request.body.rarity, likes: request.body.likes,
        comments: request.body.comments, commentLikes: request.body.commentLikes
    },{
            $set: {
                commentLikes: Number(request.body.commentLikes) + 1              }
        },{
            sort: {_id: -1},
            upsert: true
        })
        .then(result => {
            console.log('Added One Like')
            response.json('Like Added')
        })
        .catch(error => console.error(error))
    })
    
    
app.get('/home/:id', async(request, response)=>{
        db.collection('servants').find().toArray()
            .then(result => {
            let query = request.params.id // Your lookup to find Kiruya's data.  In this, req.params.id would be helpful.
            for(let i = 0;i<result.length;i++){
               if(result[i].firstName.toLowerCase()===query){
               let info = result[i]
                response.render('template.ejs', {info})
               }
            }
        }).catch(err => console.error(err))
    })


app.listen(process.env.PORT || PORT, ()=>{  
    console.log(`Server running on port ${PORT}`)
})
