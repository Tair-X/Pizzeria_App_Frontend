import React, {Component} from 'react'
import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {Route} from "react-router-dom";
import axios from "axios"
import {connect} from "react-redux";
import store from "../src/redux/redux-store";
import {setPizzasAction} from "../src/redux/actions/setPizzasAction";

export class App extends Component {

    componentDidMount() {
        axios.get("http://localhost:3000/db.json").then(({data}) => {
          store.dispatch(setPizzasAction(data.pizzas))
        })
    }


    render() {
        return (
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route path="/" render={() => <Home items={this.props.items}/>} exact/>
                    <Route path="/qwe" component={Header} exact/>

                </div>
            </div>
        )
    }
}

let mapStateToProps=(state)=>({
    items:state.pizzas.items
})




export default connect(mapStateToProps,null)(App)
