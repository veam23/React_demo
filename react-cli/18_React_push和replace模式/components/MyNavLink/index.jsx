import React, {Component} from "react";
import {NavLink, Link} from "react-router-dom";


export default class MyNavLink extends Component {
    render() {
        const {start} = this.props[0];
        return (
            <div className={start === "b" ? "d-flex" : ""}>
                {
                    Object.values(this.props).map((item) => {
                        return (
                            <div key={item.name}>
                                {
                                    item.id ?
                                        <Link
                                            replace
                                            {...item}
                                            children={item.name} />
                                        :
                                        <NavLink
                                            className={({isActive}) => `${item.vv === "link" ? "nav-link" : "btn btn-outline-secondary"}  ${(isActive ? "activeLastName" : "")}`}
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
