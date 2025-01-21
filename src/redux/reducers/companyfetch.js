import { GET_COMPANY_ERROR, GET_COMPANY_SUCCESS } from "../action"

const initialState = {
    companyCrono: [],
    companyJobs: [],
    error: '',
}


const companyReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_COMPANY_SUCCESS:
            if (state.companyCrono.includes(action.payload.data[0].company_name)) {
                return {
                    ...state,
                    companyJobs: action.payload,
                }
            } else {

                return {
                    ...state,
                    companyJobs: action.payload,
                    companyCrono: state.companyCrono.concat(action.payload.data[0].company_name)
                }
            }


        case GET_COMPANY_ERROR:
            return {
                ...state,
                error: action.payload
            }





        default:
            return state
    }


}

export default companyReducer
