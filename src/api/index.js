/*与后台交互模块*/
import ajax from './ajax'
//获取data数据
export const reqData = ()=> ajax('/data')
//获取banner数据
export const reqBanner =()=> ajax('/banner')
//获取home对象
export const reqHome =()=> ajax('/home')
//获取detail对象
export const reqDetail =()=> ajax('/detail')
//获取home对象
export const reqNav =()=> ajax('/nav')
