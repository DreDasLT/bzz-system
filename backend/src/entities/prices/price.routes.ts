import { Router } from 'express';
import PriceController from './price.controller';

const priceRouter = Router()

const priceController = new PriceController()

priceRouter.post('/', priceController.post)
priceRouter.get('/', priceController.get)
priceRouter.get('/:id', priceController.getById)
priceRouter.put('/:id', priceController.updateById)
priceRouter.delete('/:id', priceController.deleteById)
// priceRouter.get('/fill', priceController.fill)

export default priceRouter