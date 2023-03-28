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

export default { once };
