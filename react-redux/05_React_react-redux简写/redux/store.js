/**
 * @author Veam23
 * @date 2024/02/15 23:41:48
 * @Description:
 * ���ļ�ר�����ڱ�¶һ��store��������Ӧ�þ�ֻ��һ��store����
 */

import {createStore,applyMiddleware} from 'redux'
import reducer from './count_reducer'
// ����֧���첽action
import {thunk} from 'redux-thunk'


export default createStore(reducer,applyMiddleware(thunk))
