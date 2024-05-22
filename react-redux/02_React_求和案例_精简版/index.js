import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

// ���redux��״̬�ı仯��ֻҪ�仯���͵���render
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




