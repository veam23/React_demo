// index.js 入口文件
import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import store from "./redux/store";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
    <React.StrictMode>
        {/* 为每个组件都提供一个store */}
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
