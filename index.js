const express = require('express')
const bodyParser = require('body-parser');


app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//setting middleware function 
app.use(express.json());

// OpenAI GPT3 Integration
// const gpt3 = require('./gpt3')

// warm up gpt3 library
// gpt3.runQuery().then(console.log)


app.get('/', (req,res) => {
    res.send("Welcome to the Agrivoice REST API")
})

// app.post('/query', (req,res) => {
//     let qry = req.body.query
//     gpt3.runQuery(qry).then(
//         d => {
//             res.json({success:true, message: {question:qry,answer:d}})
//         }
//     ).catch(err => {
//         if(err){
//             res.json({success:false,message:"Internet connectivity error... check that you are connected or have sufficient data"})
//         }
//     })
//     // res.send("Agrovoice query")
// })


app.listen(3000)