export const addPizzaToCartAction=(pizzaObj)=>({
    type:"ADD_PIZZA_TO_CART",
    payload:pizzaObj
})

export const cleaningCartAction=()=>({
    type:"CLEANING_CART"
})


export const deleteCartItemsAction=(id)=>({
    type:"DELETE_SELECTED_ITEMS",
    payload:id
})



export const plusCartItemsAction=(id)=>({
    type:"PLUS_CART_ITEMS",
    payload:id
})


export const minusCartItemsAction=(id)=>({
    type:"MINUS_CART_ITEMS",
    payload:id
})


