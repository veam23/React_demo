import React, {Component} from "react";
import {nanoid} from "nanoid";
import {connect} from "react-redux";
import {addPerson} from "../../redux/actions/person";
import {Input, Button, Space, Table} from "antd";

class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: 0
        };
    }


    nameNode = (e) => {
        this.state.name = e;
    };

    ageNode = (e) => {
        this.state.age = +e;
    };

    render() {
        // 定义标签
        const columns = [
            {
                title: "姓名",
                dataIndex: "name",
                key: "name",
            },
            {
                title: "年龄",
                dataIndex: "age",
                key: "age",
            },
        ];

        const addPerson = () => {
            const {name, age} = this.state;
            const personObject = {id: nanoid(), key: nanoid(), name, age};
            // 传递给redux
            this.props.addPerson(personObject);
            // 清空
            this.state.name = "";
            this.state.age = "";
            const inputs = document.querySelectorAll("#myRef");
            inputs.forEach(input => (input.value = ""));
        };

        return (<div>
            <h1>我是Person组件,上方组件的求和为：{this.props.CountNumber}</h1>
            <Space.Compact style={{width: "100%"}}>
                <Input type="text" id="myRef" onChange={e => this.nameNode(e.target.value)}
                       placeholder="请输入名字" />
                <Input type="text" id="myRef" onChange={e => this.ageNode(e.target.value)}
                       placeholder="请输入年龄" />
                <Button type="primary" onClick={addPerson}>添加</Button>
            </Space.Compact>
            <Table columns={columns} dataSource={this.props.PersonObj}></Table>

        </div>);
    }
}

export default connect(state => ({
    PersonObj: state.Person, CountNumber: state.Count
}), {
    addPerson
},)(Person);
