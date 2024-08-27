import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://preppykitchen.com/peanut-butter-cookies-recipe/";
   let authorPhoto = "https://preppykitchen.com/wp-content/uploads/2020/09/New-Headshot-Round-60-2.jpg";
   let authorName = "John Kanell";

   return (
      <div>
         <img src={authorPhoto} alt="" style={{ objectFit: "contain", borderRadius: "50%" }} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a>
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["PeanutButter", "BrownSugar", "CreamButter", "granulatedSugar", "egg"];
   return (
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div>
         <div>
            <h1>Recipe Title</h1>
            <p>Short recipe description</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://preppykitchen.com/wp-content/uploads
/2020/04/Peanut-butter-cookies-feature-1.jpg" alt="Peanut Butter Cookies" className="imageUpdates" />
   );
}

export default function RecipeDisplay() {
   return (
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
