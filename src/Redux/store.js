import { createStore, applyMiddleware} from 'redux';
import reducers from './reducer';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
 
const logger = createLogger({
    // ...options
});
export const store = createStore(
    reducers,
    applyMiddleware(thunk, logger)
);