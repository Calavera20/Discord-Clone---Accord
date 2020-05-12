const logOutReducer = ( state = true, action){
    switch(action.type){
        case 'Log_Out':
            return !state;
    }

}

export default logOutReducer;