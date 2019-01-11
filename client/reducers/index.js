import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import posts from './posts';
import comments from './comments';
import blueberies from './blueberies';

const rootReducer = combineReducers({
    posts,
    comments,
    //based on the name here it will grab the 
    //blueberries data defined in Store.js
    //and pass it to the comments reducer
    blueberies: comments,
    routing:
    routerReducer
});

export default rootReducer;