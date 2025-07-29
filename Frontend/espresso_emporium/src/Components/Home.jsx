import React from "react";
import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const initialCoffeeData = useLoaderData();

  return (
    <div>
      <h1 className="text-3xl text-center mt-10 mb-20 ">Our Popular Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {initialCoffeeData.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
