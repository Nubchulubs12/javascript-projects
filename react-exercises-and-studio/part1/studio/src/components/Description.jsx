import React from 'react';
import styles from './Description.module.css';
const RecipeAuthor = () => {
    let authorLink = ("https://preppykitchen.com/peanut-butter-cookies-recipe/");
    let authorPhoto = ("https://preppykitchen.com/wp-content/uploads/2020/09/New-Headshot-Round-60-2.jpg");
    let authorName = "John Kanell";

    return (
        <div className={styles.RecipeAuthorBlock}>
            <img src={authorPhoto} alt="This is the author" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Blog name</a>
            </div>
        </div>


    );
}
class RecipeDescription extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Recipe Title</h1>
                    <p>Short recipe description</p>
                </div>
                <RecipeAuthor />
            </div>
        )

    };
}
export default RecipeDescription;