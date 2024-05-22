import React, {Component} from "react";
import {MyNavLink, MyRoute} from "./components";
import "./assets/bootstrap/css/bootstrap.css";
import "./assets/index.css";
// import {  Routes} from "react-router-dom";
import {Home, About} from "./viwes";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link: [
                {
                    id: 0,
                    to: "/home",
                    name: "home",
                },
                {
                    id: 1,
                    to: "/about",
                    name: "about",
                }
            ],
            element: [
                {
                    id: 0,
                    path: "/home",
                    element: <Home />
                },
                {
                    id: 1,
                    path: "/about",
                    element: <About />
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
                    <h2>React Router Demo</h2>
                </div>

                <div className="MainContent">
                    <div className="NavigationWidth">
                        <MyNavLink {...this.state.link}></MyNavLink>
                    </div>
                    <div className="ContentWidth">
                        <MyRoute {...this.state.element}></MyRoute>
                    </div>
                </div>
            </div>
        );
    }
}
