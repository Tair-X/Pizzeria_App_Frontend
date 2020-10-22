import React from 'react'
import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {Route} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {fetchPizzas} from "./redux/reducers/setPizaaReducer";
import {Busket} from "./components/Chart";

function App(props) {
    const dispatch=useDispatch();




    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path="/" render={() => <Home />} exact/>
                <Route path="/qwe" component={Busket} exact/>

            </div>
        </div>
    )
}

export default App

