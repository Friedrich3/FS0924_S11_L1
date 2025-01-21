import { GET_DATA_SUCCESS, GET_DATA_ERROR, CLEAR_SEARCH, LOADING_TRUE, LOADING_FALSE, ERROR_TRUE, ERROR_FALSE, PROVA } from "../action"


const initialState = {
    fetchedData: [],
    error: '',
    isLoading: false,
    isError: false,
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

        case LOADING_TRUE:
            return {
                ...state,
                isLoading: action.payload
            }


        case LOADING_FALSE:
            return {
                ...state,
                isLoading : action.payload
            }

        case ERROR_TRUE:
            return {
                ...state,
                isError: action.payload
            }

        case ERROR_FALSE:
            return {
                ...state,
                isError: action.payload
            }


        case PROVA:
            return state





        default:
            return state
    }
}


export default dataFetchReducer