const express = require('express')
const app = express()

const PORT = 8000



const rappers = {
    '21 savage': {
    'age': 29,
    'birthName': 'Shéyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England'
    },

    'chance the rapper': {
    'age': 29,
    'birthName': 'Chancelor Bennett',
    'birthLocation': 'Chicago, Illinois'
    },

    'dylan':{
    'age': 0,
    'birthName': 'Dylan',
    'birthLocation': 'Dylan'
    }
}   



app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
    // res.sendFile('server.js', { root: __dirname });

})

app.get('/api/:rapperName', (request, response)=>{

    const rapperName = request.params.rapperName.toLowerCase()

    if (rappers[rapperName]) {
        response.json(rappers[rapperName])
    } else {
        response.json (rappers['dylan'])
    }
    
    // response.json(rappers[rapperName])

})



app.listen(PORT, ()=>{
    console.log(`the server is running on ${PORT}! You betta go catch it!`)
})




