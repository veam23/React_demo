import React, {Component} from "react";
import {MyNavLink,MyRoute} from "../../components";
import News from './News'
import Message from "./Message";
import { Navigate} from 'react-router-dom'
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link:[
                {
                    to:'/home/news',
                    name:'news',
                    vv:'link'
                },
                {
                    to:'/home/message',
                    name:'message',
                    vv:'link'
                }
            ],
            element:[
                {
                    path:'news',
                    element:<News />
                },
                {
                    path:'message',
                    element:<Message />
                },
                {
                    path:'/',
                    element:<Navigate to="/home/news" />
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <h3>Home页面</h3>
                <div>
                    <ul className="nav nav-pills">
                        <MyNavLink {...this.state.link} />
                    </ul>
                    <div className="ContentWidth">
                        <MyRoute {...this.state.element}></MyRoute>
                    </div>
                </div>
            </div>
        );
    }
}
