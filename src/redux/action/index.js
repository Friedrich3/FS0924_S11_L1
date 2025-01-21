export const ADD_FAVOURITES = 'ADD_FAVOURITES'
export const REMOVE_FAVOURITES = 'REMOVE_FAVOURITES'
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'
export const GET_DATA_ERROR = 'GET_DATA_ERROR'



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



export const dataFetchAction = (query) => {
    return async (dispatch) => {

        const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

        try {
            const response = await fetch(baseEndpoint + query + "&limit=20");
            if (response.ok) {
                const data = await response.json();
                dispatch({                                                      //PERCHE VIENE CHIAMATO SOLO IL DISPATCH E BASTA
                    type: GET_DATA_SUCCESS,
                    payload: data
                })
            } else {
                throw new Error('FetchERROR');
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: GET_DATA_ERROR,
                payload: error
            })
        }



    }
}
