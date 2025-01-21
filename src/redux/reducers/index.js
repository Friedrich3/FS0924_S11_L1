import { ADD_FAVOURITES , REMOVE_FAVOURITES } from "../action"



const initialState = {
    companies: {
        favourites: []
    }

}

const mainReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_FAVOURITES:
            return {
                ...state,
                companies: {
                    ...state.companies,
                    favourites: state.companies.favourites.concat(action.payload)
                }
            }

        case REMOVE_FAVOURITES:
            return {
                ...state,
                companies: {
                    ...state.companies,
                    favourites: state.companies.favourites.filter((company) => {
                        if (company._id !== action.payload) {
                            return true
                        } else {
                            return false
                        }
                    })

                }
            }

        default:
            return state
    }

}


export default mainReducer