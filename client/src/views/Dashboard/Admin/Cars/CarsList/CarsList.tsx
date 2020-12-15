import React, { Dispatch, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ModalActions, ModalTypes } from '../../../../../state/actions/modalActions';
import AddCar from '../AddCar/AddCar';
import { getCarList, getCarModel, getModelList } from '../../../../../utils/carFunctions';
import { AppState } from '../../../../../state/reducers/rootReducer';
import EditCar from '../EditCar/EditCar';
import { CarActions } from '../../../../../state/actions/carActions';
import ICar from '../../../../../utils/entity/carType';
import { wait } from '@testing-library/react';

const CarsList = (props) => {
  const modalDispatch = useDispatch<Dispatch<ModalActions>>();
  const carDispatch = useDispatch<Dispatch<CarActions>>();

  const handleCreateCarModalOpen = () => {
    modalDispatch({ 
      type: 'OPEN_MODAL',
      modalType: ModalTypes.ADD_CAR
    })
  };

  const handleEditCarModalOpen = (car: ICar) => {
    carDispatch({
      type: 'SET_SELECTED_CAR',
      selectedCar: car
    })

    modalDispatch({ 
      type: 'OPEN_MODAL',
      modalType: ModalTypes.EDIT_CAR
    })
  };


  const { cars } = useSelector((state: AppState) => state.cars);

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const wait = async () => {
      setLoading(true)
      await getCarList()
      await getModelList()
      setLoading(false)
    }

    wait()
  }, []);

  return (
    <>
      <div className="flex justify-end">
      <button
        type='button'
        className='bg-gray-800 hover:bg-gray-700 text-white font-semibold py-1 px-4 m-2 mr-4 border border-gray-700 rounded-lg shadow-sm'
        onClick={handleCreateCarModalOpen}
      >
        Create Car
      </button>
      </div>
      <AddCar></AddCar>
      <EditCar></EditCar>
      <div className="w-full p-4 overflow-x-auto">
      <table className='min-w-full leading-normal'>
        <thead>
          <tr>
            <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
              Model
            </th>
            <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
              Gas Tank
            </th>
            <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
              Day
            </th>
            <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
              Hour
            </th>
            <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
              Minute
            </th>
            <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {!loading && cars.length
            ? cars.map((car) => (
                <tr key={car._id} className='bg-white hover:bg-gray-200 cursor-pointer' onClick={() => handleEditCarModalOpen(car)}>
                  <td className='px-5 py-5 border-b border-gray-200 text-sm'>
                    <div className='flex items-center'>
                      <div className='flex-shrink-0 w-10 h-10'>
                        {/* <img
                    className='w-full h-full rounded-full'
                    src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80'
                    alt=''
                  /> */}
                        <i className='fas fa-car-alt mr-3 w-full h-full text-2xl'></i>
                      </div>
                      <div className='ml-3'>
                        <p className='text-gray-900 whitespace-no-wrap'>
                          {getCarModel(car)?.name} <span className='text-red-600'>({car.licensePlate})</span>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 text-sm'>
                    <p className='text-gray-900 whitespace-no-wrap'>
                      {car.gasTank ? car.gasTank : '-'}
                    </p>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 text-sm'>
                    <p className='text-gray-900 whitespace-no-wrap'>
                      {getCarModel(car)?.prices?.day
                        ? getCarModel(car)?.prices?.day + '€'
                        : '-'}
                    </p>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 text-sm'>
                    <p className='text-gray-900 whitespace-no-wrap'>
                      {getCarModel(car)?.prices?.hour
                        ? getCarModel(car)?.prices?.hour + '€'
                        : '-'}
                    </p>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 text-sm'>
                    <p className='text-gray-900 whitespace-no-wrap'>
                      {getCarModel(car)?.prices?.minute
                        ? getCarModel(car)?.prices?.minute + '€'
                        : '-'}
                    </p>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 text-sm'>
                    <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                      <span
                        aria-hidden
                        className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                      ></span>
                      <span className='relative'>Active</span>
                    </span>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default CarsList;
