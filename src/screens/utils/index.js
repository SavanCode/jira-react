import { useEffect, useState } from "react";
export const isFalsy = (value) => (value === 0 ? false : !value);

//clear the empty conent
export const cleanObject = (object) => {
  const result = { ...object }; //const result = Object.assign({},object)
  Object.keys(result).forEach((key) => {
    //0
    const value = result[key];
    //如果这里是下面这个写法， 0 这个有效的值也会被排除
    //if(!value){
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};

// export const debounce= (func,wait=500)=>{
//     let timer = null;
//     return function(...param){
//         var that = this;
//         if(timer){
//             clearTimeout(timer)
//             timer= null;
//         }
//         setTimeout(() => {
//             func.apply(that,...param)
//         }, wait);
//     }
// }

export const useDebounce = (value, delay) => {
  console.log("value", value);
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    //每一次输入的变化 产生新的timer
    const timeout = setTimeout(() => setDebouncedValue(value, delay));
    // 上一个useEffect处理完之后执行
    //执行当前 effect 之前对上一个 effect 进行清除
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};
