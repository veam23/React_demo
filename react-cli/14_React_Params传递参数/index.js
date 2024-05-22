// 引入React
import React from "react";
// 引入ReactDom
import * as ReactDOM from "react-dom/client";
//引入App
import App from "./App";
import {BrowserRouter} from "react-router-dom";

// 创建root
const root = ReactDOM.createRoot(document.querySelector("#root"));
// 渲染页面
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
