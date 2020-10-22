import React from 'react';
import classNames from 'classnames';

export const  Button=(props)=>{
    return(
            <button onClick={()=>{props.onAddPizzaClick(props.obj)}} className={classNames('button',props.className,{
                'button--outline':props.outline
            })}>{props.children}</button>

    )
}