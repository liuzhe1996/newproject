// import Big from 'big.js'
// import moment from 'moment';

// 金额，三行逗号隔开
export const formatMoney = (num) => {
  if (num === undefined || num === null || Number(num) === Infinity) return 0;
  if (!num || !Number(num)) return 0;
  let isNegative = false; // 负数？
  if (Number(num) < 1000 && Number(num) > 0) {
    return num;
  }
  if (Number(num) < 0) {
    isNegative = true;
    num = Math.abs(num);
  }

  let right = new Big(num).toFixed().split('.')[1];
  right = (right === undefined) ? '' : right; // 有小数位？
  num = new Big(num).toFixed().split('.')[0];
  let len = num.length;
  let r = len % 3;
  if (len > 3) {
    num = r > 0 ? num.slice(0, r) + ',' + num.slice(r, len).match(/\d{3}/g).join(',') : num.slice(r, len).match(/\d{3}/g).join(',');
  };
  if (right) {
    num = num + '.' + right;
  };
  if (isNegative) {
    num = '-' + num;
  };
  return num;
};
/**
 * 处理小数点后有效数字
 */
export const formatNumByValid = (val, precision, isRound = false) => {
  if (typeof val === 'undefined' || val === null || Number(val) === Infinity || isNaN(val) || val === 0 || val === '0' || Number(val) === 0) {
    val = 0;
  }
  let valueStr = Number(val) + '';
  if (valueStr.indexOf('.') !== -1) {
    // let decimalPart = valueStr.match(new RegExp('(?<=\\.)0*'))[0];
    let decimalPart = valueStr.match(new RegExp('(?:\\.)0*'))[0];
    precision = precision + decimalPart.length - 1;
  }
  return formatNum(val, precision, isRound);
};
/**
 * 格式化数字精度
 * @param {string|number} val val
 * @param {number} precision 精度
 * @param {boolean} isRound true 向上取值，false 向下取值
 */
export const formatNum = (val, precision, isRound = false, isWithOutZero = false) => {
  if (typeof val === 'undefined' || val === null || Number(val) === Infinity || isNaN(val) || val === 0 || val === '0' || Number(val) === 0) {
    val = 0;
  }
  if (precision === undefined) { // 无精度，处理科学计数法
    return Big(Number(val)).valueOf();
  }
  try {
    val = Big(Number(val)).round(precision, isRound ? 3 : 0).toFixed(precision);
    if (isWithOutZero) {
      const arr = String(val).split('.')
      if (arr.length > 1 && arr[1] !== '') {
        const right = arr[1].replace(/0+$/, '')
        val = `${arr[0]}${right ? '.' + right : ''}`
      }
    }
    return val
  } catch (err) {
    console.error(err);
    return val;
  }
};
// 科学技术法转数字
export const toNonExponentials = num => {
  var data = String(num).split(/[eE]/);
  if (data.length === 1) return data[0];
  var z = '';
  var sign = this < 0 ? '-' : '';
  var str = data[0].replace('.', '');
  var mag = Number(data[1]) + 1;

  if (mag < 0) {
    z = sign + '0.';
    while (mag++) z += '0';
    return z + str.replace(/^\\-/, '');
  }
  mag -= str.length;
  while (mag--) z += '0';
  return str + z;
};
export const formatDataTime = (val, formatString) => {
  let dataTime = new Date(val - 0);
  let date = {
    'M+': dataTime.getMonth() + 1,
    'd+': dataTime.getDate(),
    'h+': dataTime.getHours(),
    'm+': dataTime.getMinutes(),
    's+': dataTime.getSeconds(),
    'q+': Math.floor((dataTime.getMonth() + 3) / 3),
    'S+': dataTime.getMilliseconds()
  };
  if (/(y+)/i.test(formatString)) {
    formatString = formatString.replace(RegExp.$1, (dataTime.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (let k in date) {
    if (new RegExp('(' + k + ')').test(formatString)) {
      formatString = formatString.replace(RegExp.$1, RegExp.$1.length === 1 ?
        date[k] : ('00' + date[k]).substr(('' + date[k]).length));
    }
  }
  return formatString;
};
/**
 * 去除数字字符串后的空0
 * @param str
 * @returns {number}
 */
export const toNumber = (str) => {
  return Number(str);
};

export const getTimeLeft = (startTime, endTime) => {
  let a = moment(startTime);
  let b = moment(endTime);
  let days = a.diff(b, 'days');
  let hours = a.diff(b, 'hours') - days * 24;
  let minutes = a.diff(b, 'minutes') - (hours * 60) - (days * 24 * 60);
  let seconds = a.diff(b, 'seconds') - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);
  let totalSeconds = a.diff(b, 'seconds');
  return {
    d: days,
    h: hours,
    m: minutes,
    s: seconds,
    ts: totalSeconds
  };
};

export const doubleDigit = (val) => {
  return val < 10 ? '0' + val : val;
};
