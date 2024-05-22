import React from "react";
import {useParams,useMatch} from "react-router-dom";

export default function Message001() {
    const {id, name} = useParams();
    const x = useMatch('/home/message/detail/:id/:name')
    console.log(x);
    return (
        <div>
            <div>组件id为：{id}</div>
            <div>组件名称为：{name}</div>
        </div>
    );
}





