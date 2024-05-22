import React, {Component} from "react";
import axios from "axios";
import PubSub from "pubsub-js";

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyWords: "",
            event: "",
            isButtonDisplay: false,
        };
    }


    Predisposes = (event, isHot) => {
        if (isHot) {
            event.value = "";
            event.focus();
        } else {
            const {value} = event.target;
            this.setState({keyWords: value, event: event.target, isButtonDisplay: true});
        }
    };

    PredKeyUp = (event) => {
        //event.target.value.trim() !== "" &&
        if (event.keyCode == 13) {
            this.ClickPop();
        }
    };


    // 点击事件
    ClickPop = () => {
        const {keyWords} = this.state;
        PubSub.publish("PubList", {isFirst: false, isLoading: true});
        setTimeout(async () => {

            try {
                const response = await fetch(`https://api.github.com/search/users?q=${keyWords}`);
                const results = await response.json();
                this.setState({keyWords: "", isButtonDisplay: true});
                this.Predisposes(document.querySelector("#inputId"), true);
                PubSub.publish("PubList", {isLoading: false, users: results.items, errorMsg: ""});
            } catch (error) {
                this.setState({keyWords: "", isButtonDisplay: true});
                this.Predisposes(document.querySelector("#inputId"), true);
                PubSub.publish("PubList", {isLoading: false, users: "", errorMsg: error.message});
            }

        }, 2000);
    };

    render() {
        return (
            <section className="p-5 bg-primary text-white rounded">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div style={{display: "flex"}}>
                    <input onKeyUp={this.PredKeyUp} id="inputId" onChange={this.Predisposes} type="text"
                           className="form-control"
                           placeholder="Enter the name you Search" />
                    <button className="btn btn-warning" style={{marginLeft: "10px"}} onClick={this.ClickPop}>Search
                    </button>
                </div>
            </section>
        );
    }
}
