const listOfSeversReducer = ( state = [], action){
    switch(action.type){

        case 'GET':         //TODO: ogarnij jak bedziesz pobieral dane o serverach i jak beda wygladaly
            return !state;

        case 'ADD':
            return [...state.arr, action.newServer];

        case 'DELETE':
            return state.filter(city => city !== action.server); //TODO: ogarnij w jaki sposob bedziesz usuwał
    } //TODO: przy usuwaniu servera musisz usunac dla wszystkich uzytkownikow ze do niego należą 
}

export default counterReducer;