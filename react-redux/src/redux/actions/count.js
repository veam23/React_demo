import {INCREMENT, DECREMENT} from "../FormType";
// ͬ��action ���
export const increment = data => ({type: INCREMENT, data});
// ɾ��
export const decrement = data => ({type: DECREMENT, data});
// �첽action ���
export const incrementAsync = (data, timer) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(increment(data));
        }, timer);
    };
};
