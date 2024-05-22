import React, {Component} from "react";
import PropTypes from "prop-types";
import "./index.css";
import {nanoid} from 'nanoid'
export default class Header extends Component {
    // 对接收的props进行：类型，必要性的限制
    // eslint-disable-next-line react/no-typos
    static PropTypes = {
        addTodo:PropTypes.func.isRequired
    }

    handleKeyUp = (event) => {
        // 解构赋值获取target,keyCode
        const {target, keyCode} = event;
        // 判断是否未回车事件
        if (keyCode !== 13) return;
        // 判断input里面的值不能为空
        if (target.value.trim() === "") {
            alert("输入不能为空！");
            return;
        }
        // 准备好一个todo对象
        const TodoObj = {id:nanoid(),name:target.value,done:false}
        // 将对象传递给App
        this.props.addTodo(TodoObj)
        // 清空输入
        target.value = ''
    };


    render() {
        return (
            <div className="TodoHeader">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        );
    }
}
