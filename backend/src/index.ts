import express, {Request, Response} from 'express'
import {connect, database} from "./database/database"
import router from './core/routes'

const PORT = 3000

const app = express()
app.use(express.json())

app.use('/', router)


app.listen(PORT, () => {
  console.log(`Started on: http://localhost:${PORT}`)
  connect();
})