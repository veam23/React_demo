import React, {Component} from "react";
import AppCss from '../../assets/index.module.css'
import './index.css'
export default class Footer extends Component {
    // 全选的回调
    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked);
    }
    // 清除完成事件
    handleClearAllDone   = () => {
        this.props.clearAllDone()
    }

    render() {
        const {todos} = this.props
        // 已完成的个数
        const doneCount = todos.reduce((pre,todo)=> pre + (todo.done ? 1:0),0)
        // 总数
        const total = todos.length
        // 样式
        const classNames = `${AppCss.btn} ${AppCss.btnDanger}`
        return (
            <div className="TodoFooter">
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !== 0}/>
                </label>
                <span>
                    <span>已完成 {doneCount} </span> / 全部 {total}
                </span>
                <button className={classNames} onClick={this.handleClearAllDone}>清除已完成任务</button>
            </div>
        );
    }
}
