import {createAction, createReducer} from "@reduxjs/toolkit";

interface CatalogState{
    catalog:string;
}
interface CatalogAction{
    type:string;
    payload:string;
}
const initialState:CatalogState={
    catalog:'Пицца'
}

export const SET_CATALOG=createAction<string>('SET_CATALOG')
export const catalogReducer=createReducer(initialState,{
    ["SET_CATALOG"]:function(state:CatalogState,action:CatalogAction){
        state.catalog=action.payload
    }
})