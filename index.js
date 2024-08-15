import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
require('dotenv').config()
import initRoutes from './src/routes'
require('./src/config/connection_Db.js')
const app = express()
app.use(cors({
    origin:process.env.CLIENT_URL,
    methods:['GET','POST','PUT','DELETE']
}))
app.use(bodyParser.json()); 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
initRoutes(app)

const PORT = process.env.PORT || 5001
const listen = app.listen(PORT,()=>{
    console.log(`server is running on the port ${PORT}`)
})