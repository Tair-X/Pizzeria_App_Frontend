import React from 'react';
import {Categories} from "./Categories";
import {Sort} from "./Sort";
import {PizzaBlock} from "./PizzaBlock";
import {setCategoryAction, setSortByAction} from "../redux/actions/setSortByAction";
import {useDispatch, useSelector} from "react-redux";
import {PizzaLoginBlock} from "./PizzaLodingBlock";
import {fetchPizzas} from "../redux/reducers/setPizaaReducer";
import {addPizzaToCartAction} from "../redux/actions/addPizzaToCartAction";

const itemsCategories=["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]
const sortItems=[
    {name:'популярности',type:'popular',order:"desc"},
    {name:'цене',type:'price',order:"desc"},
    {name:'алфавит',type:'name',order:"asc"}
]

export const Home = (props) => {

    const dispatch=useDispatch();
    const {items,isLoaded}=useSelector(({pizzas})=>{
        return{
            items:pizzas.items,
            isLoaded:pizzas.isLoaded
        }
    })

    const {category,sortBy}=useSelector(({filters})=>{
        return{
            category:filters.category,
            sortBy:filters.sortBy
        }
    })
    const {cartItems}=useSelector(({cart})=>{
        return{
            cartItems:cart.items
        }
    })


    let onClickL=React.useCallback((index)=>{
        dispatch(setCategoryAction(index))
    },[])


    let setActiveItem=React.useCallback((type)=>{
        dispatch(setSortByAction(type))
    },[])


    let handleAddPizzaToCart=(obj)=>{
        dispatch(addPizzaToCartAction(obj));
    }


    React.useEffect(()=>{
        dispatch(fetchPizzas(sortBy,category));},[sortBy,category])

    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickActiveCategory={onClickL} activeItem={category}
                            items={itemsCategories}/>
                <Sort setActive={setActiveItem} activeSort={sortBy.type} items={sortItems}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {isLoaded?items.map((obj,index)=><PizzaBlock countAdded={cartItems[obj.id]&&cartItems[obj.id].items.length} onAddPizzaClick={handleAddPizzaToCart} key={index} {...obj}/>
              ):Array(10).fill(0).map((_,index)=><PizzaLoginBlock key={index}/>  )}
            </div>
        </div>

    )
}