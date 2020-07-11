/**
 *
 *  公共函数
 *  使用: this.$common.formatDate()
 */

export default {
  // 时间过滤器
  formatDate: (time, params = {}) => {
  // 如果时间戳是13位就直接使用，否则就*1000
    time = time > Math.pow(10, 12) ? time : time * 1000
    const d = new Date(time)
    const year = d.getFullYear()
    const month = d.getMonth() + 1
    const date = d.getDate()
    const hours = d.getHours()
    const min = d.getMinutes()
    // const day = d.getDay()
    let result = year + '-' + (month < 10 ? '0' + month : month) + '-' +
    (date < 10 ? '0' + date : date) + ' ' +
    (hours < 10 ? '0' + hours : hours) + ':' +
    (min < 10 ? '0' + min : min)

    // 60秒内：xx秒前 60
    // 60分钟内：xx分钟前 60 * 60
    // 24小时内：xx小时前 24 * 60 * 60
    // 大于1天：xx天前
    if (params.filter) { // 需要过滤
      const now = Date.now()
      const diff = parseInt(String((now - time) / 1000))
      if (diff < 60) {
        result = `${diff}秒前`
      } else if (diff >= 60 && diff < 60 * 60) {
        result = `${parseInt(String(diff / 60))}分钟前`
      } else if (diff >= 60 * 60 && diff < 60 * 60 * 24) {
        result = `${parseInt(String(diff / (60 * 60)))}小时前`
      } else {
        result = `${parseInt(String(diff / (60 * 60 * 24)))}天前`
      }
    }
    return result
  },

  /**
   * 匹配金额
   * @params {money}
   */

  regMoney: (money) => {
    const reg = /((^[1-9]\d*)|^0)(\.\d{0,2})?/

    return money.match(reg) ? money.match(reg)[0] : ''
  },
  /**
   * 匹配正整数
   * @params {number}
   * */
  regPositiveInteger: (number) => {
    const reg = /^(0|\+?[1-9][0-9]*)?/

    return number.match(reg) ? number.match(reg)[0] : ''
  },
  /**
   * @params {phone}
   * */
  reqPhone: (phone) => {
    const regPhone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/

    return phone.match(regPhone) ? phone.match(regPhone)[0] : ''
  },

  /**
   *
   * 防抖函数debounce
   */
  debounce: (function () {
    let timer = null
    return (func, delay, ...args) => {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        func(...args)
        timer = null
      }, delay)
    }
  }())
}
