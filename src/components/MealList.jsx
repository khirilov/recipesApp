import { MealItem } from "./MealItem.jsx";

function MealList({ meals }) {
  return (
    <div className="list">
      {meals.map((meal) => {
        return <MealItem key={meal.idMeal} {...meal} />;
      })}
    </div>
  );
}

export { MealList };
