import axios from "axios";
import {setLoadedAction, setPizzasAction} from "../actions/setPizzasAction";

const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}


let getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)


export const cartReducer = (state = initialState, action) => {
    if (action.type === "ADD_PIZZA_TO_CART") {
        let currentItems = !state.items[action.payload.id] ? [action.payload] : [
            ...state.items[action.payload.id].items, action.payload]

        let newItems = {
            ...state.items,

            [action.payload.id]: {
                items: currentItems,
                totalPrice: getTotalPrice(currentItems)
            }

        }

        let arrCount = [].concat.apply([], Object.values(newItems).map((obj) => obj.items))


        return {
            ...state,
            items: newItems,
            totalCount: arrCount.length,
            totalPrice: getTotalPrice(arrCount)
        }
    }

    if (action.type === "CLEANING_CART") {
        return {
            items: {},
            totalPrice: 0,
            totalCount: 0
        }

    }


    if (action.type === "DELETE_CART_ITEMS") {
        return {
            items: {},
            totalPrice: 0,
            totalCount: 0
        }

    }


    if (action.type === "DELETE_SELECTED_ITEMS") {
        let newItems = {...state.items}


        let currentPrice = newItems[action.payload].totalPrice
        let currentCount = newItems[action.payload].items.length


        delete (newItems[action.payload]);

        return {
            ...state,
            items: newItems,
            totalCount: state.totalCount - currentCount,
            totalPrice: state.totalPrice - currentPrice

        }
    }


    if (action.type === "PLUS_CART_ITEMS") {

        let newItems = [...state.items[action.payload].items, state.items[action.payload].items[0]]

        let newItems2 ={
            ...state.items,
            [action.payload]: {
                items: newItems
            }
        }

        let arrCount = [].concat.apply([], Object.values(newItems2).map((obj) => obj.items))

        return {
            ...state,
            items: newItems2,
            totalPrice: getTotalPrice(arrCount),
            totalCount: arrCount.length
        }

    }

    if (action.type === "MINUS_CART_ITEMS") {
        let newItems = [...state.items[action.payload].items]
        if(newItems.length>1){newItems.splice(0, 1)}

        let currentItems = !state.items[action.payload.id] ? [action.payload] : [...state.items[action.payload.id].items, action.payload]

        let newItems2 = {
            ...state.items,

            [action.payload.id]: {
                items: currentItems,
                totalPrice: getTotalPrice(currentItems)
            }

        }

        let arrCount = [].concat.apply([], Object.values(newItems2).map((obj) => obj.items))

        return {
            ...state,
            items: {
                ...state.items,
                [action.payload]: {
                    items: newItems,
                    totalPrice: getTotalPrice(newItems)
                }
            },
            totalPrice: getTotalPrice(arrCount),
            totalCount: arrCount.length
        }
    }


    return state
}






