/*
*  ���ļ�ר�����ڱ�¶һ��store��������Ӧ��ֻ��һ��store����
* */

// ����createStore��ר�����ڴ���redux����Ϊ���ĵ�store����
import {createStore, applyMiddleware} from "redux";
// ����ΪCount��������reducer
import reducer from "./count_reducer";
// ����redux-thunk������֧���첽action
import {thunk} from "redux-thunk";

export default createStore(reducer, applyMiddleware(thunk));


