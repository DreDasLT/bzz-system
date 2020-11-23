import React, { Dispatch } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MessageActions } from '../state/actions/messageActions';
import { AppState } from '../state/reducers/rootReducer';
import { deleteMessage } from '../utils/messageFunctions';

const FlashMessage = props => {
  const { message } = useSelector((state: AppState) => state.message);
  const messageDispatch = useDispatch<Dispatch<MessageActions>>();

  const handleDestroyClick = () => {
    messageDispatch(deleteMessage())
  }

  return (
    <div>
      {message && <div className='text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-500'>
          <span className='text-xl inline-block mr-5 align-middle'>
            <i className='fas fa-bell' />
          </span>
          <span className='inline-block align-middle mr-8'>
            {/* <b className='capitalize'>red!</b> {message} */}
            {message}
          </span>
          <button onClick={handleDestroyClick} className='absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none'>
            <span>×</span>
          </button>
        </div>}
    </div>
  )
}

export default FlashMessage
