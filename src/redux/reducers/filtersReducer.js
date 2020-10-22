const initialState = {
    category:null,
    sortBy:{type:'popular',
    order:"desc"}
}


export const filtersReducer = (state = initialState, action) => {
    if (action.type === "SORT_BY") {
        return {
            ...state,
            sortBy: action.payload
        }}
    else if (action.type === "CATEGORY_BY") {
        return {
            ...state,
            category: action.payload
        }}





    return state

    }


    export default filtersReducer;
