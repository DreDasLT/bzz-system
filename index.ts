import express, {Request, Response} from 'express'
import {connect, database} from "./src/database/database"
import router from './src/core/routes'

import * as dotenv from 'dotenv'
import path from 'path'

dotenv.config()

const PORT = process.env.PORT || 3000


const app = express()
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')))

app.use(express.json())

app.use('/api', router)


const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./src/swagger.json')
 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))


console.log(path.join(__dirname+'/client/build/index.html'))
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'))
});


app.listen(PORT, () => {
  console.log(`Started on: http://localhost:${PORT}`)
  connect()
})