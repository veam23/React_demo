/**
 * @author Veam23
 * @date 2024/02/15 23:41:48
 * @Description:
 * 该文件专门用于暴露一个store对象，整个应用就只有一个store对象
 */

import {createStore, applyMiddleware} from "redux";
// 引入redux-tools-extension
import {composeWithDevTools} from "redux-devtools-extension";
// 引入汇总的reducer
import Reducer from "./reducers";
// 用于支持异步action
import {thunk} from "redux-thunk";

export default createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)));
