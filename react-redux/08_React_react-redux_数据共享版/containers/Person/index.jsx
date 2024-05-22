import React, {Component} from "react";
import {nanoid} from "nanoid";
import {connect} from "react-redux";
import {PersonAction} from "../../redux/actions/person";

class Person extends Component {
    addPerson = () => {
        const name = this.nameNode.value;
        const age = this.ageNode.value;
        const personObject = {id: nanoid(), name, age};
        // 传递给redux
        this.props.AddActions(personObject);
        // 清空
        this.nameNode.value = "";
        this.ageNode.value = "";
    };

    render() {
        return (
            <div>
                <h1>我是Person组件,上方组件的求和为：{this.props.CountNumber}</h1>
                <input type="text" ref={e => this.nameNode = e} placeholder="请输入名字" />
                <input type="text" ref={e => this.ageNode = e} placeholder="请输入年龄" />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.PersonObj.map(item => {
                            return <li key={item.id}>{item.name + "--" + item.age}</li>;
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({
        PersonObj: state.Person,
        CountNumber: state.Count
    }),
    {
        AddActions: PersonAction
    },
)(Person);
