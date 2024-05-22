import React, {Component} from "react";
import {MyNavLink, MyRoute} from "../../../components";
import Detail from "./Message001";

import {Route, Routes, Link} from "react-router-dom";

export default class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    to: `/home/message/detail`,
                    name: "message001",
                    id: "001",
                    params:'params',
                },
                {
                    to: "/home/message/detail",
                    name: "message002",
                    id: "002",
                    params:'params',
                },
                {
                    to: "/home/message/detail",
                    name: "message003",
                    id: "003",
                    params:'params',
                }
            ],
            element: [
                {
                    path: "detail/:id/:name",
                    element: <Detail />
                },
                // {
                //     path: "/",
                //     element: <Navigate to="/home/message/message001/001" />
                // }
            ]
        };
    }


    render() {
        return (
            <div>
                <ul className="nav-pills">
                    <MyNavLink {...this.state.list} />
                </ul>
                <hr />
                <div className="ContentWidth">
                    <MyRoute {...this.state.element}></MyRoute>
                </div>
            </div>
        );
    }
}
