import React, { Dispatch, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../../../../components/Modal/Modal'
import { ModalActions } from '../../../../../state/actions/modalActions';
import { AppState } from '../../../../../state/reducers/rootReducer';
import { addCar } from '../../../../../utils/carFunctions';

const AddCar = props => {

  const { isOpen } = useSelector((state: AppState) => state.modal);
  const { models } = useSelector((state: AppState) => state.models);
  const modalDispatch = useDispatch<Dispatch<ModalActions>>();

  const handleModalClose = () => {
    modalDispatch({ type: 'HIDE_MODAL' })
  };

  const [plate, setPlate] = useState<string>('')
  const [model, setModel] = useState<string>('')

  useEffect(() => {
    if (!models.length) {
      return;
    }

    setModel(models[0]._id)
  }, [models])

  const handleCarCreate = () => {
    console.log(plate, model)
    if (!plate || !model) {
      return;
    }

    addCar({licensePlate: plate, model: model})
  }

  return (
    <>
      <Modal open={isOpen} onClose={() => handleModalClose()}>
        <h2 className='font-bold text-2xl mb-6 text-gray-800 border-b pb-2'>
          Add Car
        </h2>

        <div className='inline-block w-64 mb-4'>
          <label className='text-gray-800 block mb-1 font-bold text-sm tracking-wide'>
            Select Car Model
          </label>
          <div className='relative'>
            <select value={model} onChange={(e) => setModel(e.target.value)} className='block appearance-none w-full bg-gray-200 border-2 border-gray-200 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-blue-500 text-gray-700'>
              {models.length && models.map(model => <option key={model._id} value={model._id}>{model.name}</option>)}
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <svg
                className='fill-current h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z'></path>
              </svg>
            </div>
          </div>
        </div>

        <div className='mb-4'>
          <label className='text-gray-800 block mb-1 font-bold text-sm tracking-wide'>
            Vehicle Plates
          </label>
          <input
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500'
            type='text'
            value={plate}
            onChange={(e) => setPlate(e.target.value)}
          />
        </div>

        {/* <div className='mb-4'>
          <label className='text-gray-800 block mb-1 font-bold text-sm tracking-wide'>
            Event date
          </label>
          <input
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500'
            type='text'
            readOnly
          />
        </div> */}

        <div className='mt-8 text-right'>
          <button
            type='button'
            className='bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded-lg shadow-sm mr-2'
          >
            Cancel
          </button>
          <button
            type='button'
            className='bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 border border-gray-700 rounded-lg shadow-sm'
            onClick={handleCarCreate}
          >
            Create Car
          </button>
        </div>
      </Modal>
    </>
  )
}


export default AddCar
