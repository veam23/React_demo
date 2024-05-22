import {INCREMENT, DECREMENT} from "../FormType";
// ͬ��action ���
export const createIncrementAction = data => ({type: INCREMENT, data});
// ɾ��
export const createDecrementAction = data => ({type: DECREMENT, data});
// �첽action ���
export const createIncrementAsyncAction = (data, timer) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data));
        }, timer);
    };
};
