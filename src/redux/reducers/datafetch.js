import { GET_DATA_SUCCESS, GET_DATA_ERROR, CLEAR_SEARCH } from "../action"


const initialState = {
    fetchedData: [],
    error: '',
}


const dataFetchReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_DATA_SUCCESS:
            return {
                ...state,
                fetchedData: action.payload
            }


        case GET_DATA_ERROR:
            return {
                ...state,
                error: action.payload
            }

        case CLEAR_SEARCH:
            return {
                ...state,
                fetchedData: []
            }






        default:
            return state
    }
}


export default dataFetchReducer