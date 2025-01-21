import { ADD_FAVOURITES , PROVA, REMOVE_FAVOURITES } from "../action"



const initialState = {
        favourites: [],
}

const companiesReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_FAVOURITES:
            return {
                ...state,
                    favourites: state.favourites.concat(action.payload)
              
            }

        case REMOVE_FAVOURITES:
            return {
                ...state,
                    favourites: state.favourites.filter((element) => {
                        if (element._id !== action.payload) {
                            return true
                        } else {
                            return false
                        }
                    })
            }

        case PROVA:
            return state

        default:
            return state
    }

}


export default companiesReducer