const express = require('express')
const app = express()

app.use(express.static('src/public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.sendFile("src/public/index.html")
})

const userRouter = require('./src/routes/users')

app.use('/users', userRouter)

app.listen(3000);