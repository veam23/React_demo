import React, {Component} from "react";
import "./index.css";
import AppCss from "../../assets/index.module.css";

export default class Item extends Component {
    // 标识鼠标移入，移出
    state = {mouse: false};
    // 鼠标移入，移除回调
    handleMouse = (flag) => {
        return () => {
            this.setState({mouse: flag});
        };
    };
    // 选中事件
    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked);
        };
    };

    // 删除一个todo
    handleDelete = (id) => {
        if (window.confirm("确认删除吗?")) {
            this.props.deleteTodo(id);
        }
    };

    render() {
        const {id, name, done} = this.props;
        const {mouse} = this.state;
        const classNames = `${AppCss.btn} ${AppCss.btnDanger}`;
        return (
            <li style={{backgroundColor: mouse ? "#ddd" : "#fff"}} onMouseEnter={this.handleMouse(true)}
                onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
                    <span>{name}</span>
                </label>
                <button className={classNames} onClick={() => this.handleDelete(id)}
                        style={{display: mouse ? "block" : "none"}}>删除
                </button>
            </li>
        );
    }
}
