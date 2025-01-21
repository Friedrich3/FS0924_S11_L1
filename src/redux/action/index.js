export const ADD_FAVOURITES = 'ADD_FAVOURITES'
export const REMOVE_FAVOURITES = 'REMOVE_FAVOURITES'
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'
export const GET_DATA_ERROR = 'GET_DATA_ERROR'
export const GET_COMPANY_SUCCESS = 'GET_COMPANY_SUCCESS'
export const GET_COMPANY_ERROR = 'GET_COMPANY_ERROR'
export const CLEAR_SEARCH = 'CLEAR_SEARCH'

export const LOADING_TRUE = 'LOADING_TRUE'
export const LOADING_FALSE = 'LOADING_FALSE'
export const ERROR_TRUE = 'ERROR_TRUE'
export const ERROR_FALSE = 'ERROR_FALSE'

export const PROVA = 'PROVA'



export const addToFavouritesAction = (data) => {
    return ({
        type: ADD_FAVOURITES,
        payload: data
    })
}

export const removeToFavouritesAction = (data) => {
    return ({
        type: REMOVE_FAVOURITES,
        payload: data._id
    })
}


export const clearSearchAction = (data) => {
    return ({
        type: CLEAR_SEARCH,
        payload: data
    })
}

//FORSE NON SERVONO
export const loadingTrueAction = (data) =>{
    return({
        type: LOADING_TRUE,
        payload:data
    })
}
export const loadingFalseAction = (data) =>{
    return({
        type: LOADING_FALSE,
        payload:data
    })
}



export const errorTrueAction = (data) =>{
    return({
        type: ERROR_TRUE,
        payload:data
    })
}
export const errorFalseAction = (data) =>{
    return({
        type: ERROR_TRUE,
        payload:data
    })
}



export const provaAction = () => {
    return ({
        type:PROVA,
    })
}


export const dataFetchAction = (query) => {
    return async (dispatch) => {

        const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
        dispatch({type:LOADING_TRUE,payload:true})
        dispatch({type:ERROR_FALSE,payload:false})

        try {
            const response = await fetch(baseEndpoint + query + "&limit=20");
            if (response.ok) {
                const data = await response.json();
                dispatch({                                                      
                    type: GET_DATA_SUCCESS,
                    payload: data
                })
                dispatch({type:LOADING_FALSE,payload:false})
            } else {
                throw new Error('FetchERROR');
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: GET_DATA_ERROR,
                payload: error
            })
            dispatch({type:ERROR_TRUE,payload:true})
            dispatch({type:LOADING_FALSE,payload:false})
        }
    }
}



export const companyFetchAction = (params) => {
    return async (dispatch) => {
        const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

        try {
            const response = await fetch(baseEndpoint + params.company);
            if (response.ok) {
                const data = await response.json();
                dispatch({
                    type: GET_COMPANY_SUCCESS,
                    payload: data
                });
            } else {
                alert("Error fetching results");
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: GET_COMPANY_ERROR,
                payload: error
            })
        }


    }
}