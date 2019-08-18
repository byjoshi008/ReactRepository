const defaultState = {
    tutorialList: [],
    currentCategory: ''
}
const appState = (state = defaultState, action) => {
    switch(action.type){
        case 'SET_CATEGORY':
           return {
               ...state,
               currentCategory: action.category
           }
        default:
            return state;
    }
}

export default appState;
