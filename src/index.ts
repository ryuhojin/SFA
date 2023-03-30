/**
 * @name once
 * @param func : Function
 * @returns Function
 * @description 단한번만 사용될 함수를 작성하기 위한 함수.
 * ex) 더블클릭방지
 */
const once = (func: Function) => {
  let ran: Boolean = false;
  let result: Function;
  return function (this: any) {
    if (ran) return result;
    result = func.apply(this, arguments);
    ran = true;
    return result;
  };
};

const debounce = (func: Function, delay: number) => {
  let timeout: number;
  return function (this: any) {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
};

const throttle = (func: Function, delay: number) => {
  let wait: Boolean = false;
  return (...args: any) => {
    if (wait) {
      return;
    }
    func(...args);
    wait = true;
    setTimeout(() => {
      wait = false;
    }, delay);
  };
};

export default { once, debounce, throttle };
