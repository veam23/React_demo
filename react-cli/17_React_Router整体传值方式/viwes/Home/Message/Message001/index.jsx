import React from "react";
import {useParams, useLocation, useSearchParams} from "react-router-dom";
import qs from "qs";

export default function Message001() {
    // params获取参数方式：
    const {id: idx, name: namex} = useParams();
    // search获取参数方式一：
    const [searchParams] = useSearchParams() || {};
    const id0 = searchParams.get("id");
    const name0 = searchParams.get("name");
    // // search获取参数方式2：
    const {id: id1, name: name1} = qs.parse(useLocation().search.slice(1)) || {};
    // // state获取参数方式：
    const {id: id2, name: name2} = useLocation().state || {};

    return (
        <div>
            {
                <div>
                    <h3>{idx ? "Params" : id0 ? "Search" : "State"}传值方式</h3>
                    <div>组件id为：{idx ? idx : id0 ? id0 : id1 ? id1 : id2}</div>
                    <div>组件名称为：{namex ? namex : name0 ? name0 : name1 ? name1 : name2}</div>
                    <hr />
                </div>
            }

        </div>
    );
}





