import { combineReducers } from 'redux'
import authReducer from './authReducer';
import carReducer from './carReducer';
import headerReducer from './headerReducer';
import MessageReducer from './messageReducer';
import modalReducer from './modalReducer';
import modelReducer from './modelReducer';
const rootReducer = combineReducers({
    header: headerReducer,
    auth: authReducer,
    message: MessageReducer,
    modal: modalReducer,
    models: modelReducer,
    cars: carReducer
})
export type AppState = ReturnType<typeof rootReducer>
export default rootReducer;