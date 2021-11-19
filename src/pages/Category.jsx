import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { MealList } from "../components/MealList.jsx";
import { Preloader } from "../components/Preloader.jsx";
import { filterByCategory } from "../config";

function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const { goBack } = useHistory();

  useEffect(() => {
    filterByCategory(name).then((data) => {
      setMeals(data.meals);
    });
  }, [name]);

  return (
    <>
      <button className="btn goBackBtn" onClick={goBack}>
        Go Back
      </button>
      {meals.length ? <MealList meals={meals} /> : <Preloader />}
    </>
  );
}

export { Category };
