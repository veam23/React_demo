/**
 * @author Veam23
 * @date 2024/02/14 17:33:04
 * @Description: ���ļ�ר��ΪCount�������action����
 */

import {INCREMENT, DECREMENT} from "./constant";

export const CreateIncrementAction = data => ({type: INCREMENT, data});
export const CreateDecrementAction = data => ({type: DECREMENT, data});

