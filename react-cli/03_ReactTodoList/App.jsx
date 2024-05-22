import React, {Component} from "react";
import {
    Footer,
    Header,
    List
} from "./components";
import AppCss from "./assets/index.module.css";

export default class App extends Component {

    // 初始化一个状态
    state = {
        todos: [
            {id: "001", name: "吃饭", done: true},
            {id: "002", name: "睡觉", done: false}
        ]
    };

    // addTodo 添加
    addTodo = (TodoObj) => {
        // 获取todos
        const {todos} = this.state;
        // 追加一个todo
        const newTodos = [TodoObj, ...todos];
        // 更新状态
        this.setState({todos: newTodos});
    };

    // updateTodo 更新
    updateTodo = (id, done) => {
        // 获取todos
        const {todos} = this.state;
        // 匹配处理数据
        const newTodos = todos.map((item) => {
            if (item.id === id) return {...item, done};
            else return item;
        });
        // 更新状态
        this.setState({todos: newTodos});
    };


    // deleteTodo 删除
    deleteTodo = (id) => {
        // 获取todos
        const {todos} = this.state;
        // 删除指定id的todo
        const newTodos = todos.filter((item) => {
            return item.id !== id;
        });
        // 更新状态
        this.setState({todos: newTodos});
    };

    // checkAllTodo 全选
    checkAllTodo = (done) => {
        // 获取todos
        const {todos} = this.state;
        // 加工数据
        const newTodos = todos.map((item) => {
            return {...item, done};
        });
        // 更新状态
        this.setState({todos: newTodos});
    };


    // clearAllDone 清除已完成
    clearAllDone = () => {
        // 获取todos
        const {todos} = this.state;
        // 过滤数据
        const newTodos = todos.filter((item)=>{
            return !item.done
        })
        // 更新状态
        this.setState({todos: newTodos});

    };

    render() {
        const {todos} = this.state;
        return (
            <div className={AppCss.TodoContainer}>
                <div className={AppCss.TodoWarp}>
                    <Header addTodo={this.addTodo}></Header>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}></List>
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}></Footer>
                </div>
            </div>
        );
    }
}
