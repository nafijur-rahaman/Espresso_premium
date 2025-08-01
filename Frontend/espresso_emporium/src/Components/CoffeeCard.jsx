import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, setCoffeeData, coffeeData }) => {
  const { _id, name, price, quantity } = coffee;

  const handleDelete = (id) => {
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

            const remainingCoffees = coffeeData.filter((coffee)=> coffee._id !== id);
            setCoffeeData(remainingCoffees);

            if (data.deletedCount) {
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
    <div>
      <div className=" bg-[#F4F3F0] shadow-sm grid grid-cols-3 border border-[#F4F3F0] h-60 p-3">
        <div>
          <img className="w-full" src={coffee.photo} alt="Movie" />
        </div>
        <div className="mt-20">
          <p className="text-xl">
            <span className="font-bold">Name</span>: {name}
          </p>
          <p className="text-xl">
            <span className="font-bold">Quantity</span>: {quantity}
          </p>
          <p className="text-xl">
            <span className="font-bold">Price</span>: {price}
          </p>
        </div>


        <div className="flex flex-col gap-5">
        

        <Link to={`/coffeeDetails/${_id}`}>
            <button className="btn btn-square w-9">
            <img src="/eye.png" alt="" />
          </button>
        </Link>



         <Link to={`/updateCoffee/${_id}`}>
          <button className="btn btn-circle w-9">
            <img src="/pen.png" alt="" />
          </button>
         </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-circle w-9"
          >
            <img src="/delete.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
