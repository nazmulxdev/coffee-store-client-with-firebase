import React, { useContext, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdAutoDelete, MdDetails } from "react-icons/md";
import { useLoaderData } from "react-router";
import { successMessage } from "../Utilities/sweetAlerts";
import Swal from "sweetalert2";
import AuthContext from "../Context/AuthContext";

const Users = () => {
  const { removeUser } = useContext(AuthContext);
  const initialUsers = useLoaderData();
  const [Users, setUsers] = useState(initialUsers);

  //   delete user from fire base

  const handleDelete = (id, uid) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/users/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ uid }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.result?.deletedCount) {
              //   removeUser().then(() => {

              //   });

              successMessage("User Deleted Successfully").then(() => {
                const remainingUser = Users.filter((user) => user._id !== id);
                setUsers(remainingUser);
              });
            }
          });
      }
    });
  };
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <caption className="font-bold text-xl">
          Total Users: {Users.length}
        </caption>
        {/* head */}
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>User Email</th>
            <th>Phone Number</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {Users.map((user, index) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={user.photoUrl}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user.name}</div>
                    <div className="text-sm opacity-50">{user.address}</div>
                  </div>
                </div>
              </td>
              <td>
                Email: {user.email}
                <br />
                <span className="badge badge-ghost badge-sm">
                  Profile Creation Time: {user.creationTime}
                </span>
                <span className="badge badge-ghost badge-sm">
                  Last SignIn Time: {user.lastSignInTime}
                </span>
              </td>
              <td>{user.phoneNumber}</td>
              <td>
                <div className="flex join-vertical lg:join-horizontal items-center justify-center">
                  <button
                    onClick={() => handleDelete(user._id, user.uid)}
                    className="btn  btn-xs join-item"
                    title="Delete"
                  >
                    <MdAutoDelete></MdAutoDelete>
                  </button>
                  <button className="btn  btn-xs join-item" title="Edit">
                    <FaEdit></FaEdit>
                  </button>
                  <button className="btn  btn-xs join-item" title="Details">
                    <MdDetails></MdDetails>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
