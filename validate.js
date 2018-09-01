/* 合法uri*/
export function validateURL(textval) {
    const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
    return urlregex.test(textval)
}

/* 小写字母*/
export function validateLowerCase(str) {
    const reg = /^[a-z]+$/
    return reg.test(str)
}

/* 大写字母*/
export function validateUpperCase(str) {
    const reg = /^[A-Z]+$/
    return reg.test(str)
}

/* 大小写字母*/
export function validateAlphabets(str) {
    const reg = /^[A-Za-z]+$/
    return reg.test(str)
}

/* 邮箱 */
/**
 * validate email
 * @param email
 * @returns {boolean}
 */
export function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
}

/* 手机号码 */
/**
 * validate telphone
 * @param telphone
 * @returns {boolean}
 */
export function validateTelphone(telphone) {
    const re = /^1[3|5|7|8][0-9]\d{4,8}$/
    return re.test(telphone)
}

/* 两位小数价格 */
/**
 * validate price
 * @param price
 * @returns {boolean}
 */
export function validatePrice(price) {
    const re = /^[0-9]+(.[0-9]{2})?$/
    return re.test(price)
}

/* 中文 */
/**
 * validate Chinese
 * @param Chinese
 * @returns {boolean}
 */
export function validateChinese(Chinese) {
    const re = /^[\u0391-\uFFE5]+$/
    return re.test(Chinese)
}





