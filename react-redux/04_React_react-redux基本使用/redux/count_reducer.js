/*
* 1. 该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
* 2. reducer函数会接到两个参数，分别为：之前的状态（preState），动作对象（action）
* */
// 初始化
let init = 0;
const createStore = (pre = init, action) => {
    // console.log(pre, action);
    // if(pre === undefined) pre = 0
    const {type, data} = action;
    // 根据type决定加工数据
    switch (type) {
        case "increment" :
            return pre + data;
        case "decrement" :
            return pre - data;
        default:
            return pre;
    }
};

export default createStore;
