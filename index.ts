import express, {NextFunction, Request, Response} from 'express'
import {connect, database} from "./src/database/database"
import router from './src/core/routes'

import * as dotenv from 'dotenv'
import path from 'path'
import { nextTick } from 'process'

dotenv.config()

const PORT = process.env.PORT || 3000


const app = express()
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'public')))

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./src/swagger.json')
 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))


app.use(express.json())

app.use('/api', router)

console.log(path.join(__dirname+'/client/build/index.html'))
app.get('/*', (req: Request,res: Response, next: NextFunction) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'), (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log("sent")
    }
  })
});


app.listen(PORT, () => {
  console.log(`Started on: http://localhost:${PORT}`)
  connect()
})