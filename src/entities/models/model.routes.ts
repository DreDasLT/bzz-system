import { Router } from 'express'
import { checkRole } from '../users/authValidation'
import ModelController from './model.controller'

const modelRouter = Router()

const modelController = new ModelController()

modelRouter.post('/', checkRole('superadmin'), modelController.post)
modelRouter.get('/', checkRole(['basic', 'admin', 'superadmin']), modelController.get)
modelRouter.get('/:id', checkRole(['basic', 'admin', 'superadmin']), modelController.getById)
modelRouter.put('/:id', checkRole(['admin', 'superadmin']), modelController.updateById)
modelRouter.delete('/:id', checkRole(['superadmin']),  modelController.deleteById)
modelRouter.get('/:id/cars', checkRole(['admin']), modelController.getCarsById)
// modelRouter.get('/fill', modelController.fill)

export default modelRouter