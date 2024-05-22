import React, {Component} from "react";
import {Route, Routes} from "react-router-dom";

export default class MyRoute extends Component {
    render() {
        return (
            <Routes>
                {
                    Object.values(this.props).map(item => {
                        return (
                            <Route key={item.id} {...item} />
                        );
                    })
                }
            </Routes>
        );
    }
}
