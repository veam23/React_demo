import React from "react";
import {useLocation, useSearchParams} from "react-router-dom";
import qs from "qs";

export default function Message001() {
    const x = useLocation();
    const {id, name} = qs.parse(x.search.slice(1));
    const [searchParams] = useSearchParams();
    const idx = searchParams.get("id");
    const namex = searchParams.get("name");

    return (
        <div>
            <div>组件id为：{id}</div>
            <div>组件名称为：{name}</div>
        </div>
    );
}





