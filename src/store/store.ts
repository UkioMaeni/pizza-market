import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {catalogReducer} from "./reducers/catalogReducer";
import {cardReducer} from "./reducers/cardReducer";



const rootReducer=combineReducers({
    catalog:catalogReducer,
    card:cardReducer
})

export const  store=()=>configureStore({
    reducer:rootReducer
})
export type RootState = ReturnType<typeof rootReducer>
export type AppStore=ReturnType<typeof store>
export type AppDispatch=AppStore['dispatch']