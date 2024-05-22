/**
 * @author Veam23
 * @date 2024/02/15 23:41:48
 * @Description:
 * ���ļ�ר�����ڱ�¶һ��store��������Ӧ�þ�ֻ��һ��store����
 */

import {createStore, applyMiddleware, combineReducers} from "redux";
// ����redux-tools-extension
import { composeWithDevTools } from 'redux-devtools-extension';

import CountReducer from "./reducers/count";
import PersonReducer from "./reducers/person";
// ����֧���첽action
import {thunk} from "redux-thunk";
// �������е�reducer��Ϊһ���ڵ�reducer
const allReducer = combineReducers({
    Count: CountReducer,
    Person: PersonReducer
});

export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)));
