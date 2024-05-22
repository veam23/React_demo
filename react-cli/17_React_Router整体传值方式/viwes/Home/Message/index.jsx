import React, {Component} from "react";
import {MyNavLink, MyRoute} from "../../../components";
import Detail from "./Message001";

export default class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                // params
                {
                    to: `/home/message/detail/001/message001`,
                    name: "message001",
                    id: "001",
                    vv: "link"
                },
                // search == query
                {
                    to: "/home/message/detail?id=002&name=message002",
                    name: "message002",
                    id: "002",
                    vv: "link"
                },
                // stare 传递一个对象
                {
                    to: "/home/message/detail",
                    name: "message003",
                    id: "003",
                    state: {
                        id: "003",
                        name: "message003"
                    },
                    vv: "link"
                }
            ],
            element: [
                {
                    path: "detail/:id/:name",
                    name: "001Params",
                    element: <Detail />
                },
                {
                    path: "detail",
                    name: "001Search",
                    element: <Detail />
                },
                {
                    path: "detail",
                    name: "001State",
                    element: <Detail />
                },
                // {
                //     path: "/",
                //     element: <Navigate to="/home/message/detail" />
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
