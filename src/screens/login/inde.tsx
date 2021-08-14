import React, { FormEvent } from "react";

// 感受一下继承
// interface Base {
//     id:number
// }

// interface Person extends Base {
//     name:string
// }

// const p: Person ={name:"name",id:234}

// 下面的体会一下，对于函数input值对于继承类型的包容
// interface Base {
//     id:number
// }

// interface Advance extends Base {
//     name:string
// }

// const testFunc = (props:Base) => {

// }

// const a:Advance = { id: 1, name: "name"}

// 注意这里a是可以传入并且没有错误的，因为它满足了他的基本要求
// testFunc(a)
// 这个例子主要是 要理解 这里是鸭子类型（duck typing）： 面向接口编程， 而不是 面向对象编程

export const LoginScreen = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {};
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">UserName</label>
        <input type="text" name="" id={"username"} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="" id={"password"} />
      </div>
      <button type={"submit"}>Login</button>
    </form>
  );
};
