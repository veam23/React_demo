/**
 * @author Veam23
 * @date 2024/02/15 22:32:30
 * @Description:
 * 容器组件
 */


import React, {Component} from "react";
import {connect} from "react-redux";
import {
    createIncrementAsyncAction,
    createDecrementAction,
    createIncrementAction
} from "../../redux/count_action";


import {Flex, Select, Button} from "antd";
// 定义UI组件
class CountUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
        };
    }

    // 选中值
    handleChange = (value) => {
        this.state.value = value;
    };
    // 下拉值
    options = [
        {value: 1, label: 1},
        {value: 2, label: 2},
        {value: 3, label: 3},
        {value: 4, label: 4},
    ];

    // 点击事件
    OnState = (number) => {
        const {value} = this.state;
        number === 1 ? this.props.Addition(value * 1) :
            number === 2 ? this.props.Subtraction(value * 1) :
                number === 3 ? this.props.count % 2 !== 0 && this.props.Addition(value * 1) :
                    this.props.OddNumberAddition(value * 1, 500);
    };

    render() {
        return (
            <div>
                <h1>当前求和为：{this.props.count}</h1>
                <Flex
                    gap="middle"
                    justify="center"
                    vertical>
                    <Select
                        defaultValue="1"
                        style={{width: 120}}
                        onChange={this.handleChange}
                        options={this.options}
                    />
                    <Button type="primary" onClick={() => this.OnState(1)}>相加</Button>
                    <Button type="dashed" onClick={() => this.OnState(2)}>相减</Button>
                    <Button danger onClick={() => this.OnState(3)}>当前求和为奇数再加</Button>
                    <Button
                        type="dashed"
                        danger onClick={() => this.OnState(4)}>
                        异步相加
                    </Button>
                </Flex>
            </div>
        );
    }
}

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(
    state => ({count: state}),
    {
        Addition: createIncrementAction,
        Subtraction: createDecrementAction,
        OddNumberAddition: createIncrementAsyncAction
    }
)(CountUI);
