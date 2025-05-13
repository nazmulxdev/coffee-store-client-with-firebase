import React from "react";
import { FaEdit, FaEye, FaRecycle } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, photoUrl, name, chef, price } = coffee;
  console.log(coffee);
  const handleDelete = (id) => {
    console.log(id);
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
        fetch(`http://localhost:3000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainingCoffees = coffees.filter(
                (coffee) => coffee._id !== id
              );
              setCoffees(remainingCoffees);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className=" p-8 sm:flex sm:space-x-6 dark:bg-gray-50 dark:text-gray-800 border rounded-2xl grid grid-cols-3 items-center justify-around">
      <div className="w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
        <img
          src={photoUrl}
          alt=""
          className="object-cover object-center w-full h-full rounded dark:bg-gray-500"
        />
      </div>
      <div className="flex flex-col space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">{name}</h2>
          <span className="text-sm dark:text-gray-600">Chef: {chef}</span>
        </div>
        <div>
          <span className="text-lg dark:text-gray-600">Price: ${price}</span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-1">
        <Link to={`/coffees/${_id}`}>
          <button className="btn">
            <FaEye></FaEye>
          </button>
        </Link>
        <Link to={`/updateCoffee/${_id}`}>
          <button className="btn">
            <FaEdit></FaEdit>
          </button>
        </Link>

        <button onClick={() => handleDelete(_id)} className="btn">
          <MdDelete></MdDelete>
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
