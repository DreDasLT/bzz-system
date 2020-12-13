import { Mockgoose } from 'mockgoose'
import Mongoose from "mongoose"
let database: Mongoose.Connection
const connect = () => {
  // add your own uri below
  const uri = process.env.MONGO_URI
  return new Promise<any>((resolve, reject) => {
    
    if (process.env.NODE_ENV === 'test') {
      const mockgoose = new Mockgoose(Mongoose);

      mockgoose.prepareStorage()
        .then(() => {
          Mongoose.connect(uri, {
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
          })
          .then((res) => { 
            resolve(res);
          })
          .catch((err)=> {
            console.log(err)
            reject(err);
          });

          database = Mongoose.connection
        })
        .catch((err) => {
          reject(err)
        })
    } else {
      if (database) {
        reject()
      }
      Mongoose.connect(uri, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      database = Mongoose.connection
      database.once("open", async () => {
        console.log("Connected to database")
        resolve()
      })
      database.on("error", () => {
        console.log("Error connecting to database")
        reject()
      })
    }
  })
}
export const disconnect = () => {
  if (!database) {
    return
  }
  return Mongoose.disconnect()
}

export {database, connect}