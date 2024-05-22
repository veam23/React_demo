/**
 * @author Veam23
 * @date 2024/02/15 14:07:40
 * @Description:���ļ�ר��ΪCount�������action����
 */
import {DECREMENT, INCREMENT} from "./FormType";
// ͬ��action������ֵaction��ֵΪObject���͵�һ�����
export const createIncrementAction = data => ({type: INCREMENT, data});
export const createDecrementAction = data => ({type: DECREMENT, data});
// ��ν���첽action������ֵaction��ֵΪ����,�첽action��һ�㶼�����ͬ��action���첽action���Ǳ���Ҫ�õġ�
export const createIncrementAsyncAction = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data));
        }, time);
    };
};
