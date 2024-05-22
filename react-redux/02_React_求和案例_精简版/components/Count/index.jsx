import React, {Component} from "react";
import {Button, Flex, Select} from "antd";
import "./index.css";
// 引入store，用于获取redux中保存状态
import store from "../../redux/store";
// 引入actionCreator，专门创建action对象
import {CreateIncrementAction, CreateDecrementAction} from "../../redux/count_action";

export default class Count extends Component {

    constructor(props) {
        super(props);
        this.state = {
            change: 1
        };
    }


    // componentDidMount() {
    // 检测redux中状态的变化，只要变化，就调用render
    //     store.subscribe(() => {
    //         this.setState({});
    //     });
    // }


    options = [
        {value: "1", label: "1"},
        {value: "2", label: "2"},
        {value: "3", label: "3"},
        {value: "4", label: "4"},
        {value: "5", label: "5"},
        {value: "6", label: "6"},
    ];


    handleChange = (value) => {
        this.state.change = value;
    };

    OnState = (value) => {
        const {change} = this.state;
        value === 1 ? store.dispatch(CreateIncrementAction(change * 1)) :
            value === 2 ? store.dispatch(CreateDecrementAction(change * 1)) :
                value === 3 ? store.getState() % 2 !== 0 && store.dispatch(CreateIncrementAction(change * 1)) :
                    setTimeout(() => {
                        store.dispatch(CreateIncrementAction(change * 1));
                    }, 1000);
    };


    render() {
        return (
            <div>
                <h1>求当前和为: {store.getState()}</h1>
                <div className="margin">
                    <Flex gap="small" justify="center">
                        <Select
                            defaultValue="1"
                            style={{width: 120}}
                            onChange={this.handleChange}
                            options={this.options}
                        />
                        <Button type="primary" onClick={() => this.OnState(1)}>相加</Button>
                        <Button type="dashed" onClick={() => this.OnState(2)}>相减</Button>
                        <Button type="primary" danger onClick={() => this.OnState(3)}>当前求和为奇数再加</Button>
                        <Button danger onClick={() => this.OnState(4)}>异步加</Button>
                    </Flex>
                </div>
            </div>
        );
    }
}
