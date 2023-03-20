import {useSelector, TypedUseSelectorHook, useDispatch} from "react-redux";
import {AppDispatch, RootState} from "../store/store";

export const useTypedSelector:TypedUseSelectorHook<RootState>=useSelector
export const useTypedDispatch=()=>useDispatch<AppDispatch>()