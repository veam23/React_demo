import React, {Component} from "react";
import {NavLink} from "react-router-dom";

export default class MyNavLink extends Component {
    render() {
        return (
            <div>
                {
                    Object.values(this.props).map(item => {
                        return (
                            <NavLink
                                key={item.id}
                                className={({isActive}) => `btn btn-outline-secondary ${(isActive ? "activeLastName" : "")}`}
                                {...item}
                                children={item.name}
                            />
                        );
                    })
                }
            </div>
        );
    }
}
