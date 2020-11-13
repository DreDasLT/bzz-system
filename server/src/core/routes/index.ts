import { Router } from 'express'
import carRouter from '../../entities/cars/car.routes'
import priceRouter from '../../entities/prices/price.routes'
import modelRouter from '../../entities/models/model.routes'
import userRouter from '../../entities/users/user.routes'

const router = Router()
router.use('/car', carRouter)
router.use('/price', priceRouter)
router.use('/model', modelRouter)
router.use('/user', userRouter)

export default router