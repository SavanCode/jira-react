import React from "react";

export const List = (list, users) => {
  console.log(list)
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody> 
        {list.list.map((project) => (
          <tr>
            <td>{project.name}</td>              
            <td>            
              {list.users.find((user) => user.id === project.personId)?.name || "未知"}       
            </td>      
          </tr>
        ))}
      </tbody>
    </table>
  );
};
