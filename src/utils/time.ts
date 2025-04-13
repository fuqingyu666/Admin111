//封装一个函数：获取一个结果当前早上|上午|下午|晚上
export const getTime = () => {
    //通过内置构造函数Date
    let hours = new Date().getHours();
    let message = '';
    //通过内置构造函数Date
    if (hours <= 9) {
        message = '早上'
    } else if (hours <= 12) {
        message = '上午'
    } else if (hours <= 18) {
        message = '下午'
    } else {
        message = '晚上'
    }
    return message
}