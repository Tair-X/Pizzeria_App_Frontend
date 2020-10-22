import React from "react";
import ContentLoader from "react-content-loader"

export const PizzaLoginBlock=(props)=>{
    return(<ContentLoader
        className={"pizza-block"}
        speed={2}
        width={260}
        height={460}
        viewBox="0 0 260 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="12" y="26" rx="0" ry="0" width="0" height="11" />
        <rect x="512" y="516" rx="0" ry="0" width="165" height="168" />
        <circle cx="350" cy="90" r="37" />
        <circle cx="518" cy="106" r="61" />
        <circle cx="416" cy="104" r="31" />
        <circle cx="127" cy="129" r="109" />
        <circle cx="165" cy="110" r="3" />
        <rect x="4" y="250" rx="0" ry="0" width="280" height="24" />
        <rect x="4" y="284" rx="0" ry="0" width="280" height="84" />
        <rect x="7" y="389" rx="0" ry="0" width="90" height="27" />
        <rect x="127" y="389" rx="13" ry="13" width="123" height="27" />
    </ContentLoader>)

}



