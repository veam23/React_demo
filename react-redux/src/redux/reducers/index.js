import {combineReducers} from "redux";
// 引入每个reducer
import Count from "./count";
import Person from "./person";
// 汇总所有的reducer变为一个宗的reducer
export default combineReducers({
    Count,
    Person
});

