// 引入React
import React from "react";
// 引入ReactDom
import ReactDOM from "react-dom/client";
//引入App
import App from "./App";
// 创建root
const root = ReactDOM.createRoot(document.querySelector("#root"));
// 渲染页面
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
