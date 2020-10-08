import { Router } from 'express';
import ModelController from './model.controller';

const modelRouter = Router()

const modelController = new ModelController()

modelRouter.post('/', modelController.post)
modelRouter.get('/', modelController.get)
modelRouter.get('/:id', modelController.getById)
modelRouter.put('/:id', modelController.updateById)
modelRouter.delete('/:id', modelController.deleteById)
modelRouter.get('/:id/cars', modelController.getCarsById)
// modelRouter.get('/fill', modelController.fill)

export default modelRouter