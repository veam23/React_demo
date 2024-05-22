/**
 * @author Veam23
 * @date 2024/02/15 23:54:41
 * @Description:
 * ���ļ������ڴ���һ��ΪCount��������reducer
 * reducer�ı��ʾ���һ������
 * reducer��������������������ֱ���:֮ǰ��״̬��preState��,��������action��
 */

let initNumber = 0;
const createStore = (pre=initNumber, action) => {
    const {type, data} = action;
    switch (type) {
        case "increment":
            return pre + data;
        case "decrement":
            return pre - data;
        default:
            return pre
    }
};
export default createStore;
