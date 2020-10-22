import axios from "axios";
import {setLoadedAction, setPizzasAction} from "../actions/setPizzasAction";

const initialState = {
    items: [],
    isLoaded:false
}





export const fetchPizzas=(sortBy,category)=>(dispatch)=>{
    dispatch(setLoadedAction(false));
    axios.get(`http://localhost:3001/pizzas?${category!==null?`category=${category}`:''}&_sort=${sortBy.type}&_order=${sortBy.order}`).then(({data}) => {
        dispatch(setPizzasAction(data));
        dispatch(setLoadedAction(true));
    })
}


export const setPizzasReducer = (state = initialState, action) => {
    if (action.type === "SET_PIZZAS") {
        return {
            ...state,
            items: action.payload,
            isLoaded: true
        }}

    else if (action.type === "SET_LOADED") {
        return {
            ...state,
            isLoaded: action.payload
        }}
        return state

    }
