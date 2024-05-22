/**
 * @author Veam23
 * @date 2024/02/15 23:54:41
 * @Description:
 * 该文件适用于创建一个为Count组件服务的reducer
 * reducer的本质就是一个函数
 * reducer函数会接收两个参数，分别是:之前的状态（preState）,动作对象（action）
 */

let initNumber = 0;
const createStore = (pre=initNumber, action) => {
    const {type, data} = action;
    switch (type) {
        case "INCREMENT":
            return pre + data;
        case "DECREMENT":
            return pre - data;
        default:
            return pre
    }
};
export default createStore;
