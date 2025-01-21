import { configureStore, combineReducers } from "@reduxjs/toolkit"
import companiesReducer from "../reducers/favourites"
import dataFetchReducer from "../reducers/datafetch"

const mainReducer = combineReducers({
    fetchData : dataFetchReducer,
    companies : companiesReducer

})


const store = configureStore({
    reducer: mainReducer
})

export default store