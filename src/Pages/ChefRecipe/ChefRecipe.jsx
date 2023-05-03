import React from 'react';
import { useParams } from 'react-router-dom';

const ChefRecipe = () => {
    const {id} =useParams();
    console.log(id)
    return (
        <div>
            coming soon
        </div>
    );
};

export default ChefRecipe;