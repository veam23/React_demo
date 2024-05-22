import {INCREMENT, DECREMENT} from "../FormType";
// 同步action 相加
export const increment = data => ({type: INCREMENT, data});
// 删除
export const decrement = data => ({type: DECREMENT, data});
// 异步action 相加
export const incrementAsync = (data, timer) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(increment(data));
        }, timer);
    };
};
