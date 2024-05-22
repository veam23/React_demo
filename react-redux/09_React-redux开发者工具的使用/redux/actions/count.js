import {INCREMENT, DECREMENT} from "../FormType";
// 同步action 相加
export const createIncrementAction = data => ({type: INCREMENT, data});
// 删除
export const createDecrementAction = data => ({type: DECREMENT, data});
// 异步action 相加
export const createIncrementAsyncAction = (data, timer) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data));
        }, timer);
    };
};
