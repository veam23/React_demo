// 引入Count的UI组件库
import {Count} from "../../components";
// 引入connect用于连接UI组件与redux
import {connect} from "react-redux";
// 引入action
import  {
    createIncrementAction,
    createIncrementAsyncAction,
    createDecrementAction
} from '../../redux/count_action'
/**
 * @author Veam23
 * @date 2024/02/15 21:19:10
 * @Description:
 * 1.mapStateToProps函数返回的是一个对象；
 * 2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
 * 3，mapStateToProps用于传递状态
 */
const mapStateToProps = (state) => {
    return {count: state};
};
/**
 * @author Veam23
 * @date 2024/02/15 21:20:25
 * @Description:
 * 1.mapDispatchToProps函数返回的是一个对象
 * 2.返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
 * 3.mapDispatchToProps用于传递操作状态的方法
 */
const mapDispatchToProps = (dispatch) => {
    return {
        // 加法
        Addition: (number) => {
            dispatch(createIncrementAction(number));
        },
        // 减法
        Subtraction:(number) => {
            dispatch(createDecrementAction(number));
        },
        // 异步action
        OddNumberAddition:(number,timer)=>{
            dispatch(createIncrementAsyncAction(number,timer))
        }
    };
};

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(Count);
