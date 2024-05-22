import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

// 检测redux中状态的变化，只要变化，就调用render
store.subscribe(() => {
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
});
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);




