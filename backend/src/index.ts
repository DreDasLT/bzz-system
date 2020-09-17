import express, {Request, Response} from 'express'
import {connect, database} from "./database/database"
import router from './core/routes'

const PORT = process.env.PORT || 3000


const app = express()
app.use(express.json())

app.use('/api', router)


const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log(`Started on: http://localhost:${PORT}`)
  connect();
})