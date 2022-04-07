import React from 'react';
import './thirdAssignment.css'
function ReceipeTitle (){

    const number = 4;
    console.log(number % 2 ? 'The number is odd' : 'The number is even');

    return(
        <div>
            <h2>Third Assignment</h2>
            <p>{recipe.title}</p>
            <p>{recipe.feedback.rating}</p>
            <p>{recipe.ingredients.name}</p>
            {
                recipe.ingredients.map((key,i)=>
                {return <li key={i} className={key.prepared == true ? "green" : "red"}>{key.name} - {key.prepared ? "done" : "In Process"}</li>})
            }
        </div>
    )
}

const recipe = {
    title: 'Mashed potatoes',
    feedback: {
        rating: 4.1,
        reviews: 20
    },
    ingredients: [
        { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
        { name: '4 Tbsp butter', prepared: false },
        { name: '1/8 cup heavy cream', prepared: false },
        { name: 'Salt', prepared: true },
        { name: 'Pepper', prepared: true },
    ],
};

export default ReceipeTitle;