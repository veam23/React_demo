/*
* 1. ���ļ������ڴ���һ��ΪCount��������reducer��reducer�ı��ʾ���һ������
* 2. reducer������ӵ������������ֱ�Ϊ��֮ǰ��״̬��preState������������action��
* */
// ��ʼ��
let init = 0;
const createStore = (pre = init, action) => {
    // console.log(pre, action);
    // if(pre === undefined) pre = 0
    const {type, data} = action;
    // ����type�����ӹ�����
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
