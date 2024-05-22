import React, { Component } from 'react'
import CountUI from './containers/Count'
import store from "./redux/store";
export default class App extends Component {
  render() {
    return (
      <div>
        <CountUI store={store}/>
      </div>
    )
  }
}
