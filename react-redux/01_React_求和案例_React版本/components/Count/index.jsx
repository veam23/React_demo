import React, {Component} from "react";
import {Button, Flex, Select} from "antd";
import "./index.css";

export default class Count extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            change: 0
        };
    }


    options = [
        {value: "0", label: "0"},
        {value: "1", label: "1"},
        {value: "2", label: "2"},
    ];


    handleChange = (value) => {
        this.state.change = value;
    };

    OnState = (value) => {
        const {count, change} = this.state;

        value === 1 ? this.setState({count: count + change * 1}) :
            value === 2 ? this.setState({count: count - change * 1}) :
                value === 3 ? count % 2 !== 0 && this.setState({count: count + change * 1}) :
                    setTimeout(() => {
                        this.setState({count: count + change * 1});
                    }, 5000);
    };


    render() {
        return (
            <div>
                <h1>求当前和为: {this.state.count}</h1>
                <div className="margin">
                    <Flex gap="small" justify="center">
                        <Select
                            defaultValue="0"
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
