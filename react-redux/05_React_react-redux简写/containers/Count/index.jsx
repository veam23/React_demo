/**
 * @author Veam23
 * @date 2024/02/15 22:32:30
 * @Description:
 * ÈÝÆ÷×é¼þ
 */

import Count from "../../components/Count";
import {connect} from "react-redux";
import {
    createIncrementAsyncAction,
    createDecrementAction,
    createIncrementAction
} from "../../redux/count_action";


export default connect(
    state => ({count: state}),
    {
        Addition: createIncrementAction,
        Subtraction: createDecrementAction,
        OddNumberAddition: createIncrementAsyncAction
    }
)(Count);
