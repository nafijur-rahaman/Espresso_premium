import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";

const Home = () => { 
  const [coffeeData, setCoffeeData] = useState([]);
  const initialCoffeeData = useLoaderData();
  useEffect(() => {
    setCoffeeData(initialCoffeeData);
  }, [initialCoffeeData]);

  return (
    <div>
      <h1 className="text-3xl text-center mt-10 mb-20 ">Our Popular Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {coffeeData.map((coffee) => (
          <CoffeeCard key={coffee._id} setCoffeeData={setCoffeeData} coffeeData={coffeeData} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
