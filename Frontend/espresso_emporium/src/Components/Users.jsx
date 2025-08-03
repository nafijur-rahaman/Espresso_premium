import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

const Users = () => {
  const [users, setUsers] = useState([]);
  const userLoadData = useLoaderData();
  useEffect(() => {
    setUsers(userLoadData);
  }, [userLoadData]);
  
  const handleDelete =(id)=>{



  }

  return (
    <div>
      <div className="overflow-x-auto mt-20 max-w-4xl mx-auto ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user,index) => {
              return (
                <tr key={user._id}>
                  <th>
                    <label>
                      {
                        index+1
                      }
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={user.userProfile.photo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user.userProfile.name}</div>
                        <div className="text-sm opacity-50">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-ghost badge-sm">{user.userProfile.phone}</span>
                  </td>
                  <td>
                    <button className="btn btn-ghost btn-xs">{user.userProfile.address}</button>
                  </td>
                  <td>
                    <button onClick={()=>console.log(user._id)} className="btn bg-red-600 text-white text-sm  btn-xs">delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
