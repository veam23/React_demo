/**
 * @author Veam23
 * @date 2024/02/15 23:41:48
 * @Description:
 * 该文件专门用于暴露一个store对象，整个应用就只有一个store对象
 */

import {createStore, applyMiddleware, combineReducers} from "redux";
// 引入redux-tools-extension
import { composeWithDevTools } from 'redux-devtools-extension';

import CountReducer from "./reducers/count";
import PersonReducer from "./reducers/person";
// 用于支持异步action
import {thunk} from "redux-thunk";
// 汇总所有的reducer变为一个宗的reducer
const allReducer = combineReducers({
    Count: CountReducer,
    Person: PersonReducer
});

export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)));
