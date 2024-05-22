import React, {Component} from "react";
import axios from "axios";

export default class App extends Component {
    ClickServer = async () => {
        const res = await axios.get("/api1/status");
        console.log(res);
    };
    ClickApp = async () => {
        const res = await axios.get("/api2/cups");
        console.log(res);
    };

    render() {
        return (
            <div>
                <button onClick={this.ClickServer}>点击server服务器</button>
                <button onClick={this.ClickApp}>点击app服务器</button>
            </div>
        );
    }
}
