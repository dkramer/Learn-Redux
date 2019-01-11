//reducer takes in two things
//the action (info on what happenned)
//copy of current state

function postBlueberies(state = [], action) {
    switch(action.type) {
        case 'ADD_COMMENT':
            //return the new state with the new comment
            return [...state, {user: action.author, text: action.comment}]
        case 'REMOVE_COMMENT':
            return [
                ...state.slice(0, action.i),
                ...state.slice(action.i + 1),

            ]
            return state;
        default:
            return state;
    }
    return state;
};

function blueberries(state = [], action) {
    console.log('blueberries()', state, action);
    if (typeof action.postId !== 'undefined') {
        return {
            //take the current state
            ...state,
            //overwrite this post with a new one
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
};



export default blueberries;