import { configureStore, combineReducers } from "@reduxjs/toolkit"
import companiesReducer from "../reducers/favourites"
import dataFetchReducer from "../reducers/datafetch"
import companyReducer from "../reducers/companyfetch"

const mainReducer = combineReducers({
    fetchData : dataFetchReducer,
    companies : companiesReducer,
    companySearch : companyReducer

})


const store = configureStore({
    reducer: mainReducer
})

export default store