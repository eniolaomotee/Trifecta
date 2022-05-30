
const currentDataDefultState = false

const showEdit = (state = currentDataDefultState, action) =>{
    switch (action.type){
        case 'DISPLAY_EDIT':
            return true;
        case 'CLOSE_EDIT':
            return false;
        default:
            return state;
    }
}

export default showEdit;