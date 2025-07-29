import React from "react";
import { useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const coffeeData = useLoaderData();
  const {photo,name,price,quantity,details,_id} = coffeeData

  return (
    <div className="flex justify-center mt-30">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={photo}
            alt="coffee"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>
           {details}
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{price} BDT</div>
            <div className="badge badge-outline">{quantity} pcs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
