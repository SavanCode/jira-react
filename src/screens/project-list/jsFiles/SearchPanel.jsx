// import React from "react";

// export const SearchPanel = ({param, setParam, users}) => {
//   //console.log(users)
//   return (
//     <form action="">
//       <div>
//         <input
//           type="text"
//           value={param.name}
//           onChange={(event) =>
//             setParam({
//               ...param,
//               name: event.target.value,
//             })
//           }
//         />
//         <select
//           name=""
//           id=""
//           value={param.personId}
//           onChange={(event) =>
//             setParam({
//               ...param,
//               personId: event.target.value,
//             })
//           }
//         >
//           <option value={""}>负责人</option>
//           {
//              users.map(user =><option value={user.id} key={user.id}>{user.name}</option>)
//           }
//         </select>
//       </div>
//     </form>
//   );
// };
