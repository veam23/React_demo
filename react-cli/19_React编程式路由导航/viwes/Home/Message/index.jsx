import React, {useEffect} from "react";
import {MyNavLink, MyRoute} from "../../../components";
import Detail from "./Message001";
import {useNavigate} from "react-router-dom";

export default function Message() {
    const state = {
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

    const Navigate = useNavigate();
    // replace传值方式
    const replaceShow = (id, name) => {
        // params
        // Navigate(`/home/message/detail/${id}/${name}`, {replace: true});
        // search
        // Navigate(`/home/message/detail/?id=${id}&name=${name}`, {replace: true});
        // state
        Navigate(`/home/message/detail/`, {state: {id, name}}, {replace: true});
    };
    // push传值方式
    const pushShow = (id, name) => {
        // params
        // Navigate(`/home/message/detail/${id}/${name}`);
        // search
        Navigate(`/home/message/detail/?id=${id}&name=${name}`);
        // state
        // Navigate(`/home/message/detail/`,{state:{id,name}});
    };
    // Go的使用方式
    const Go = (id) => {
        // 集成使用 前进/后退/去到哪
        Navigate(id);
    };

    useEffect(() => {
        const idx = setTimeout(() => {
            pushShow("002", "测试002");
        }, 2000);
        return () => {
            clearTimeout(idx);
        };
    });

    return (
        <div>
            <ul className="nav-pills">
                <MyNavLink {...state.list} />
                <hr />
                <br />
                <button className="btn btn-outline-secondary"
                        onClick={() => replaceShow("001", "测试001")}>replace模式
                </button>
                <br />
                <button className="btn btn-outline-secondary" onClick={() => pushShow("001", "测试001")}>push模式
                </button>
                <br />
                <button className="btn btn-outline-secondary" onClick={() => Go(-1)}>回退</button>
                <br />
                <button className="btn btn-outline-secondary" onClick={() => Go(1)}>前进</button>
                <br />
                <button className="btn btn-outline-secondary" onClick={() => Go(2)}>Go</button>
            </ul>
            <hr />
            <div className="ContentWidth">
                <MyRoute {...state.element}></MyRoute>
            </div>
        </div>
    );

}
