import React, {Component} from "react";
import "./App.css";
import {ContainerCount} from "./containers";
import store from "./redux/store";

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <ContainerCount store={store}></ContainerCount>
            </div>
        );
    }
}
