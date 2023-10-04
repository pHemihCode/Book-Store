require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express();
const connectDB = require('./db/mongoDb')
const { logger } = require('./middleware/logEvents')
const bookRoutes = require('./routes/routes')

connectDB();
app.use(logger)
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/books',bookRoutes)
app.get('/',(req,res) => {
    res.send('<h1>Hello fucking world!!!</h1>')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server has started on ${PORT}`)
})