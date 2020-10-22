import React from 'react';


export const  Categories=React.memo((props)=>{



    return(
        <div className="categories">
            <ul>
                <li onClick={()=>{props.onClickActiveCategory(null)}} className={props.activeItem===null?"active":""}>Все</li>
                {props.items.map((i,index)=>{
                    return(<li key={index} className={props.activeItem===index?"active":""} onClick={()=>{props.onClickActiveCategory(index)}}>{i}</li>)
                })}

            </ul>
        </div>
    )
})