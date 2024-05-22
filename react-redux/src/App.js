import React, {Component} from "react";
import CountUI from "./containers/Count";
import PersonUI from "./containers/Person";

export default class App extends Component {
    render() {
        return (
            <div>
                <CountUI />
                <hr />
                <PersonUI />
            </div>
        );
    }
}
