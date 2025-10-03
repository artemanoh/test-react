import PropTypes from "prop-types";
import { RecipeInfo } from "./RecipeInfo";
import { FaClock, FaFire } from "react-icons/fa";

export const Recipe = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} style={{ width: "700px", height: "auto" }}/>
      <p>Dietary: {recipe.dietary}</p>
      <RecipeInfo icon={FaClock} text={recipe.time} />
      <RecipeInfo icon={FaFire} text={`${recipe.ccalories} calories`} />
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    dietary: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    ccalories: PropTypes.number.isRequired,
  }).isRequired,
};
