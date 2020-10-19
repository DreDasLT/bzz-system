import { Router } from 'express'
import { checkRole } from '../users/authValidation'
import PriceController from './price.controller'

const priceRouter = Router()

const priceController = new PriceController()

priceRouter.post('/', checkRole('superadmin'), priceController.post)
priceRouter.get('/', checkRole(['basic', 'admin', 'superadmin']), priceController.get)
priceRouter.get('/:id', checkRole(['basic', 'admin', 'superadmin']), priceController.getById)
priceRouter.put('/:id', checkRole(['admin', 'superadmin']),  priceController.updateById)
priceRouter.delete('/:id', checkRole(['superadmin']),  priceController.deleteById)
priceRouter.get('/:id/models', checkRole('superadmin'), priceController.getModelsById)
// priceRouter.get('/fill', priceController.fill)

export default priceRouter