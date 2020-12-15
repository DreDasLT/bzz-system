import axios from 'axios';
import { ISetCars } from '../state/actions/carActions';
import { ISetModels } from '../state/actions/modelActions';
import { ModelState } from '../state/reducers/modelReducer';
import store from '../state/store/store';
import ICar from './entity/carType';
import IModel from './entity/modelType';
import { hideModal } from './modalFunctions';

export const getCarList = () => {
  return axios
    .get(process.env.REACT_APP_API_URL + 'car')
    .then((res) => {
      store.dispatch(setCars(res.data))
    }).catch((error) => {
      console.error(error)
    })
}

export const getModelList = () => {
  return axios
    .get(process.env.REACT_APP_API_URL + 'model')
    .then((res) => {
      store.dispatch(setModels(res.data))
    }).catch((error) => {
      // store.dispatch(setMessage(error.response.data.message))
      console.error(error)
    });
}

export const addCar = (car: {model: string, licensePlate: string}) => {
  return axios
    .post(process.env.REACT_APP_API_URL + 'car', car)
    .then((res) => {
      console.log(res)
      getCarList()
      hideModal()
    }).catch((error) => {
      // store.dispatch(setMessage(error.response.data.message))
      console.error(error)
    });
}

export const editCar = (car: ICar) => {
  return axios
    .put(process.env.REACT_APP_API_URL + 'car/' + car._id, car)
    .then((res) => {
      getCarList()
      hideModal()
    }).catch((error) => {
      // store.dispatch(setMessage(error.response.data.message))
      console.error(error)
    });
}

export const setModels = (models: Array<IModel>): ISetModels => {
  return {
    type: 'SET_MODELS',
    models
  }
}

export const setCars = (cars: Array<ICar>): ISetCars => {
  return {
    type: 'SET_CARS',
    cars
  }
}

export const getCarModel = (car: ICar) => {
  const state = store.getState()
  const models: Array<IModel> = state.models.models;
  return models.find(model => model._id === car.model);
}

export const deleteCar = (car: ICar) => {
  return axios
    .delete(process.env.REACT_APP_API_URL + 'car/' + car._id)
    .then((res) => {
      getCarList()
      hideModal()
    }).catch((error) => {
      // store.dispatch(setMessage(error.response.data.message))
      console.error(error)
    });
}