export const RecipeInfo = ({ icon: Icon, text }) => {
  return (
    <div>
      {Icon && <Icon size={24} />} {text}
    </div>
  );
};
