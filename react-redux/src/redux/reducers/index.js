import {combineReducers} from "redux";
// ����ÿ��reducer
import Count from "./count";
import Person from "./person";
// �������е�reducer��Ϊһ���ڵ�reducer
export default combineReducers({
    Count,
    Person
});

