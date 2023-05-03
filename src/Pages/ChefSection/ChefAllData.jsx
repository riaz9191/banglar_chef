import React, { useState, useEffect } from "react";
import ChefSingleData from "./ChefSingleData";

const ChefAllData = () => {
  const [chefData, setChefData] = useState([]);

  useEffect(() => {
    const fetchChefData = async () => {
      const response = await fetch("http://localhost:5000/chefData");
      const data = await response.json();
      setChefData(data);
    };

    fetchChefData();
  }, []);

  return (
    <div className="grid lg:grid-cols-3 gap-8 justify-between mt-12 my-container">
      {chefData.map((cData) => (
        <ChefSingleData key={cData.id} {...cData} />
      ))}
    </div>
  );
};

export default ChefAllData;
