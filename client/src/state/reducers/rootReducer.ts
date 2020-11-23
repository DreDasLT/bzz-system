import { combineReducers } from 'redux'
import authReducer from './authReducer';
import countReducer from './countReducer'
import headerReducer from './headerReducer';
import MessageReducer from './messageReducer';
import nameReducer from './nameReducer';
const rootReducer = combineReducers({
    count: countReducer,
    name: nameReducer,
    header: headerReducer,
    auth: authReducer,
    message: MessageReducer
})
export type AppState = ReturnType<typeof rootReducer>
export default rootReducer;