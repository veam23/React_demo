import React, {Component} from "react";
import {NavLink} from "react-router-dom";


export default class MyNavLink extends Component {
    render() {
        const {vv} = this.props[0];
        return (
            <div className={vv === "link" ? "d-flex" : ""}>
                {
                    Object.values(this.props).map((item) => {
                        return (
                            <div>
                                {item.vv === "link" ?
                                    <li className="nav-item">
                                        <NavLink
                                            key={item.name}
                                            className={({isActive}) => `nav-link ${(isActive ? "activeLastName" : "")}`}
                                            {...item}
                                            children={item.name}
                                        />
                                    </li>
                                    :
                                    <NavLink
                                        key={item.name}
                                        className={({isActive}) => `btn btn-outline-secondary ${(isActive ? "activeLastName" : "")}`}
                                        {...item}
                                        children={item.name}
                                    />
                                }
                            </div>


                        );
                    })
                }
            </div>
        );
    }
}
