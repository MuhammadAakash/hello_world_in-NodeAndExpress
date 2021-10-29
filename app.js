const express = require('express')
const app = express()
const port = 3000

app.use('/', (req, res,next) => {
    res.status(200).json({
        message :'Hello Word!'
    })
  
})

app.listen(port, () => {
  console.log(` http://localhost:${port}`)
})


module.exports= app