/**
 * @author Veam23
 * @date 2024/02/14 17:33:04
 * @Description: 该文件专门为Count组件生成action对象
 */

import {INCREMENT, DECREMENT} from "./constant";

export const CreateIncrementAction = data => ({type: INCREMENT, data});
export const CreateDecrementAction = data => ({type: DECREMENT, data});

