const isLoading = (state = true, action) =>{
    switch (action.type){
        case 'STILL_LOADING':
            return true;
        case 'DONE_LOADING':
            return false;
        default:
            return state;
    }
}
export default isLoading;