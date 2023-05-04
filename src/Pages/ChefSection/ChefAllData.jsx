import React, { useState, useEffect } from "react";
import ChefSingleData from "./ChefSingleData";

const ChefAllData = () => {
  const [chefData, setChefData] = useState([]);

  useEffect(() => {
    const fetchChefData = async () => {
      const response = await fetch("http://localhost:7000/chefData");
      const data = await response.json();
      setChefData(data);
    };

    fetchChefData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-between mt-12 my-container" style={{paddingLeft: '20px', paddingRight: '20px'}}>
    {chefData.map((cData) => (
      <ChefSingleData key={cData.id} {...cData} />
    ))}
  </div>
  
  );
};

export default ChefAllData;
