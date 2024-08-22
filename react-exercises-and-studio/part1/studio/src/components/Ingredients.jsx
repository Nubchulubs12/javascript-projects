import style from './Ingredients.module.css';
const RecipeIngredients = () => {
    let ingredients = ["PeanutButter", "BrownSugar", "CreamButter", "granulatedSugar", "egg"];
    return (
        <div>
            <h3>Recipe Ingredients</h3>
            <ul className={style.ingredientList}>
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
                <li>{ingredients[3]}</li>
                <li>{ingredients[4]}</li>
                {/* <li>{ingredients[5]}</li> */}
            </ul>
        </div>
    );
};
export default RecipeIngredients;