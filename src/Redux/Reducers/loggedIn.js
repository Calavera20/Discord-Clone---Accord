const loggedInReducer = ( state = flase, action){
    switch(action.type){
        case 'Log_In':
            return !state;
    }

}

export default loggedInReducer;