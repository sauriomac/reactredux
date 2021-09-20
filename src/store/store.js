import { createStore, combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { NoteReducer } from '../reducers/noteReducer';
import { uiReducer } from '../reducers/uiReducers';



const reducers = combineReducers({
    auth:authReducer,
    ui:uiReducer,
    notes:NoteReducer

})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
    );