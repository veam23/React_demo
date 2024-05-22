import React, {Component} from "react";
import {MyNavLink, MyRoute} from "../../../components";
import Detail from "./Message001";
export default class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    to: `/home/message/detail`,
                    name: "message001",
                    id: "001",
                    state: "state",
                },
                {
                    to: "/home/message/detail",
                    name: "message002",
                    id: "002",
                    state: "state",
                },
                {
                    to: "/home/message/detail",
                    name: "message003",
                    id: "003",
                    state: "state",
                }
            ],
            element: [
                {
                    path: "detail",
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
