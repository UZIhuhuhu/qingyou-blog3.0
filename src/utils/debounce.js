/**
 *
 * @param fn {Function}   实际要执行的函数
 * @param delay {Number}  延迟时间，单位是毫秒（ms）
 *
 * @return {Function}     返回一个“防反跳”了的函数
 */

export default function debounce(fn, delay = 250) {
  var timer;
  return function() {
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  };
}
