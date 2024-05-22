import React, {Component} from "react";
// import {Navigation, Content} from "./components";
import "./assets/bootstrap/css/bootstrap.css";
import "./assets/index.css";
import {Link, Route, Routes} from "react-router-dom";
import {Home, About} from "./views";

export default class App extends Component {


    clickOneDork = (el) => {
        console.log(el);
    };

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps, prevState);
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
                        <Link className="btn btn-outline-secondary" to="/about">About</Link>
                        <Link className="btn btn-outline-secondary" to="/home">Home</Link>
                    </div>
                    <div className="ContentWidth">
                        <Routes>
                            <Route path="/about" element={<About />}></Route>
                            <Route path="/home" element={<Home />}></Route>
                        </Routes>
                    </div>
                </div>
            </div>
        );
    }
}
