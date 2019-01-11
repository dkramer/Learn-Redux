//increment likes
export function increment(index) {
    //actions are just objects with names
    return {
        type: 'INCREMENT_LIKES',
        index
    };
};

//add comment
export function addComment(postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    };
};

//remove comment
export function removeComment(postId, i) {
    return {
        type:'REMOVE_COMMENT',
        i,
        postId
    }
};

export function doBlueBerries(postId, i) {
    return {
        type:'DO_BLUEBERIES',
        i,
        postId
    }
};