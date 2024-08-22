import recipedata from "./recipe.json";
import "./styling.css";
function AuthorInfo() {
  const recipeAuthor = <div>{recipedata[0].author}</div>;

  const recipeAuthorImage = <img className="authorImage" src={recipedata[0].authorImage}></img>

  let url = recipedata[0].website;
  const recipeWebsite = <a href={url} target="_blank">{url}</a>
  return (
    <div>
      {recipeAuthorImage}
      {recipeAuthor}
      {recipeWebsite}
    </div>
  );
}

export default AuthorInfo;

//import styles.css
//import json file for author info
//image, name, website
//css for styling image
