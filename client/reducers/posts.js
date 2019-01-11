//reducer takes in two things
//copy of current state
//the action (info on what happenned)

function posts(state = [], action) {
    console.log('posts()', state, action)
    switch(action.type) {
        case 'INCREMENT_LIKES' :
            const i = action.index;
            //return updated state
            return [
                ...state.slice(0, i), //before the one we are updating
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i + 1), //after the one we are updating
            ];
        default:
            return state;
    }
    return state;
};

export default posts;