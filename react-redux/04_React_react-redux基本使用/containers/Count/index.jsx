// ����Count��UI�����
import {Count} from "../../components";
// ����connect��������UI�����redux
import {connect} from "react-redux";
// ����action
import  {
    createIncrementAction,
    createIncrementAsyncAction,
    createDecrementAction
} from '../../redux/count_action'
/**
 * @author Veam23
 * @date 2024/02/15 21:19:10
 * @Description:
 * 1.mapStateToProps�������ص���һ������
 * 2.���صĶ����е�key����Ϊ���ݸ�UI���props��key,value����Ϊ���ݸ�UI���props��value
 * 3��mapStateToProps���ڴ���״̬
 */
const mapStateToProps = (state) => {
    return {count: state};
};
/**
 * @author Veam23
 * @date 2024/02/15 21:20:25
 * @Description:
 * 1.mapDispatchToProps�������ص���һ������
 * 2.���صĶ����е�key����Ϊ���ݸ�UI���props��key��value����Ϊ���ݸ�UI���props��value
 * 3.mapDispatchToProps���ڴ��ݲ���״̬�ķ���
 */
const mapDispatchToProps = (dispatch) => {
    return {
        // �ӷ�
        Addition: (number) => {
            dispatch(createIncrementAction(number));
        },
        // ����
        Subtraction:(number) => {
            dispatch(createDecrementAction(number));
        },
        // �첽action
        OddNumberAddition:(number,timer)=>{
            dispatch(createIncrementAsyncAction(number,timer))
        }
    };
};

// ʹ��connect()()��������¶һ��Count���������
export default connect(mapStateToProps, mapDispatchToProps)(Count);
