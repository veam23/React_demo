import React, {Component} from "react";
import {List, Search} from "./components";
import "./assets/index.css";
import "./assets/bootstrap/css/bootstrap.css";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isFirst: true,
            isLoading: false,
            errorMsg: "",
        };
    }

    ChangeState = (stateObj) => {
        this.setState(stateObj)
    };


    render() {
        return (
            <div className="container">
                <Search ChangeState={this.ChangeState} />
                <List {...this.state}/>
            </div>
        );
    }
}
