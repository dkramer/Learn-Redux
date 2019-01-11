import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

//import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

//create object for default data
const defaultState = {
    posts,
    comments,
    blueberies: {yo: 'blueeee', posts, comments}
};

const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

//create the store
//first param is a reducer, the second the data
const store= createStore(rootReducer, defaultState, enhancers);

const history = syncHistoryWithStore(browserHistory, store);


//if module is 'hot' then it will reload the redcuers for us 
//so we don't need to refresh the browser
if (module.hot) {
    module.hot.accept('./reducers/', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}


export {history};

export default store;