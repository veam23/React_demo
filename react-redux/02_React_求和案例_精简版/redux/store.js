/*
*  ���ļ�ר�����ڱ�¶һ��store��������Ӧ��ֻ��һ��store����
* */

// ����createStore��ר�����ڴ���redux����Ϊ���ĵ�store����
import {createStore} from "redux";
// ����ΪCount��������reducer
import reducer from "./count_reducer";

export default createStore(reducer);


