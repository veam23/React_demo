import React, {Component} from "react";
import {List, Search} from "./components";
import "./assets/index.css";
import "./assets/bootstrap/css/bootstrap.css";

export default class App extends Component {

    render() {
        return (
            <div className="container">
                <Search />
                <List />
            </div>
        );
    }
}
