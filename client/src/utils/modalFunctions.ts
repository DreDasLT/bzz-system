import { IHideModalAction } from '../state/actions/modalActions'
import store from '../state/store/store'

export const hideModal = () => {
  const hideModal: IHideModalAction = {
    type: 'HIDE_MODAL'
  }
  store.dispatch(hideModal)
}