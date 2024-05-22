import React, {Component} from "react";
import {Home, About} from "./viwes";
import "./assets/index.css";
import {Navigate} from "react-router-dom";
import {MyNavLink, MyRoute} from "./components";


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    to: "/home",
                    name: "home"
                },
                {
                    to: "/about",
                    name: "about"
                },
            ],
            element: [
                {
                    path: "/home/*",
                    name:'001Home',
                    element: <Home />
                },
                {
                    path: "/about",
                    name:'001About',
                    element: <About />
                },
                {
                    path: "*",
                    name:'001*',
                    element: <Navigate to="/home" />
                }
            ]
        };
    }

    componentDidMount() {
        const wrt = document.documentElement.clientWidth;
        const hrt = document.documentElement.clientHeight;
        window.onload = () => {
            document.getElementById("root").style.width = wrt + "px";
            document.getElementById("root").style.height = hrt + "px";

        };
    }

    render() {
        return (
            <div className="Main">
                <div className="MainTitle">
                    <h2>React Route Demo</h2>
                </div>
                <div className="MainContent">
                    {/* 左边导航区 */}
                    <div className="NavigationWidth">
                        <MyNavLink {...this.state.list} />
                    </div>
                    {/* 右边内容区 */}
                    <div className="ContentWidth">
                        <MyRoute {...this.state.element}></MyRoute>
                    </div>
                </div>
            </div>
        );
    }
}
