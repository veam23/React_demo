import React ,{useEffect} from 'react'
import {useNavigate} from "react-router-dom";
export default function News() {
    const Navigate = useNavigate();
    useEffect(()=>{
        // 在组件渲染完成后执行的代码
       const ide = setTimeout(()=>{
            Navigate('/home/message')
        },2000)

        // 清理副作用操作的代码
        return () => {
           clearTimeout(ide)
        }
    })

    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}
