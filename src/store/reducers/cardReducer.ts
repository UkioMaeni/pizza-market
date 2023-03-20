import {createAction, createReducer, PayloadAction} from "@reduxjs/toolkit";
import {IList} from "../../helpers/pizzaImg";

interface IStateCard{
    cardList:IList[]
    view:boolean
}



const initialState:IStateCard={
    cardList:[],
    view:false
}

export const SET_CARD=createAction<IList>('SET_CARD')
export const EDIT_MODAL=createAction<boolean>('EDIT_MODAL')
export const cardReducer=createReducer(initialState,{
    "SET_CARD":function (state:IStateCard, action:PayloadAction<IList>){
        state.cardList.push(action.payload)
    },
    "EDIT_MODAL":function (state:IStateCard, action:PayloadAction<boolean>){
        state.view=action.payload
    }
})