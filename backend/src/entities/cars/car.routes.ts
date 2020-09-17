import { Router } from 'express';
import CarController from './car.controller';

const carRouter = Router()

const carController = new CarController()

carRouter.post('/', carController.post)
carRouter.get('/', carController.get)
carRouter.get('/:id', carController.getById)
carRouter.put('/:id', carController.updateById)
carRouter.delete('/:id', carController.deleteById)
// carRouter.get('/fill', carController.fill)

export default carRouter