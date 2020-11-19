import { combineReducers } from 'redux'
import countReducer from './countReducer'
import headerReducer from './headerReducer';
import nameReducer from './nameReducer';
const rootReducer = combineReducers({
    count: countReducer,
    name: nameReducer,
    header: headerReducer
})
export type AppState = ReturnType<typeof rootReducer>
export default rootReducer;