import React, {Component} from "react";
import PropTypes from "prop-types";
import {Item} from "../../components";
import "./index.css";

export default class List extends Component {

    // 对接收的props进行：类型，必要性的限制
    // eslint-disable-next-line react/no-typos
    static PropTypes = {
        todos: PropTypes.array.isRequired,
        updateTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    };


    render() {
        const {todos, updateTodo, deleteTodo} = this.props;
        return (
            <ul className="TodoList">
                {
                    todos.map((todo) => {
                        return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}></Item>;
                    })
                }
            </ul>
        );
    }
}
