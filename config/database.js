const mongoose = require('mongoose')

const connectDB = async ()=>{//can also use .then here
try{
    const conn = await mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log(`MongoDB Connected: ${conn.connection.host}`)
}catch(err){
    console.error(err)
    process.exit(1)
}
}

module.exports = connectDB