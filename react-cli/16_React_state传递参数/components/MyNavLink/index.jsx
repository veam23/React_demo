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
                                    item.vv === "link" ?
                                        <li className="nav-item">
                                            <NavLink
                                                className={({isActive}) => `nav-link ${(isActive ? "activeLastName" : "")}`}
                                                {...item}
                                                children={item.name}
                                            />
                                        </li>
                                        :
                                        // params 参数
                                        item.params ?
                                            <Link to={`${item.to}/${item.id}/${item.name}`}>{item.name}</Link>
                                            :
                                            // search 参数
                                            item.search ?
                                                <Link
                                                    to={`${item.to}/?id=${item.id}&name=${item.name}`}>{item.name}</Link>
                                                :
                                                // state 参数
                                                item.state ?
                                                    <Link to={`${item.to}`}
                                                          state={
                                                              {
                                                                  id: `${item.id}`,
                                                                  name: `${item.name}`
                                                              }
                                                          }>
                                                        {item.name}
                                                    </Link>
                                                    :
                                                    <NavLink
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
