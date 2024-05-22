import React, {Component} from "react";
import PubSub from "pubsub-js";

export default class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            isFirst: true,
            isLoading: false,
            errorMsg: "",
        };

    }

    // 挂载
    componentDidMount() {
        this.token = PubSub.subscribe("PubList", (mes, data) => {
            this.setState(data);
        });
    }

    // 组件快要销毁
    componentWillUnmount() {
        PubSub.unsubscribe(this.token);
    }

    render() {
        const {users, isFirst, isLoading, errorMsg} = this.state;
        return (
            <div className="row mt-4  text-white">
                <div className="col">
                    {
                        isFirst ? <h2>欢迎使用，请输入关键字，点击搜索即可搜索</h2> :
                            isLoading ? <h2>正在加载</h2> :
                                errorMsg ? <h2 style={{color: "red"}}>{errorMsg}</h2> :
                                    users.map(item => {
                                        return (
                                            <div className="card " style={{width: "18rem"}} key={item.id}>
                                                <a href={item.html_url}>
                                                    <img className="card-img-top"
                                                         src={item.avatar_url}
                                                         alt="avatar" />
                                                </a>
                                                <div className="card-body">
                                                    <p className="card-text">{item.login}</p>
                                                </div>
                                            </div>
                                        );
                                    })
                    }
                </div>
            </div>
        );
    }
}
