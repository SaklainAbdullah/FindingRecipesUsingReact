import React from "react"
import "./recipe.css"
function Recipe({title,calories,image,ingredients})
{
   return (
     <div className="recipe">
        <h1>{title}</h1>
        <h3>Calories: {calories.toFixed(2)}</h3>
        <img src={image}/>
        {ingredients.map(ingredient=>(
           <li>{ingredient.text}</li>

        ))}
     </div>
   )
}

export default Recipe;
