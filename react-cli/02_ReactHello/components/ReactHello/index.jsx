import HelloCss from "./index.module.css";

const Hello = () => {
    return (
        <div>
            <h1 className={HelloCss.title}>你好React,时间</h1>
        </div>
    );
};

export default Hello;

