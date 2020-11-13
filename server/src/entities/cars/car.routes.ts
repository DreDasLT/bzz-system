import { Router } from 'express'
import { checkRole } from '../users/authValidation'
import CarController from './car.controller'

const carRouter = Router()

const carController = new CarController()

carRouter.post('/', checkRole('superadmin'), carController.post)
carRouter.get('/', carController.get)
carRouter.get('/:id', checkRole(['basic', 'admin', 'superadmin']), carController.getById)
carRouter.put('/:id', checkRole(['admin', 'superadmin']), carController.updateById)
carRouter.delete('/:id', checkRole(['superadmin']), carController.deleteById)
// carRouter.get('/fill', carController.fill)

export default carRouter