import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Preloader } from "../components/Preloader.jsx";
import { getMealById } from "../config";

function Recipe() {
  const { id } = useParams();
  const [mealData, setMealData] = useState({});
  const { goBack } = useHistory();
  useEffect(() => {
    getMealById(id).then((data) => {
      setMealData(data.meals[0]);
    });
  }, [id]);
  return (
    <>
      {!mealData.idMeal ? (
        <Preloader />
      ) : (
        <div className="recipe">
          <h2>{mealData.strMeal}</h2>
          {mealData.strTags && <h4>#tags: {mealData.strTags}</h4>}
          {mealData.strArea && <h4>country: {mealData.strArea}</h4>}
          <img src={mealData.strMealThumb} alt={mealData.strMeal} />

          <table className="centered">
            <thead>
              <tr>
                <th>Ingedient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(mealData).map((key) => {
                if (key.includes("Ingredient") && mealData[key]) {
                  return (
                    <tr key={key}>
                      <td>{mealData[key]}</td>
                      <td>{mealData[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>
          {mealData.strYoutube ? (
            <div className="row">
              <h5 style={{ margin: "2rem 0 1.5rem" }}>Video Recipe</h5>
              <iframe
                title={id}
                src={`https://www.youtube.com/embed/${mealData.strYoutube.slice(
                  -11
                )}`}
                allowfullscreen
              />
            </div>
          ) : null}
          <h4>Instruction</h4>
          <p>{mealData.strInstructions}</p>
        </div>
      )}
      <button className="btn goBackBtn" onClick={goBack}>
        Go Back
      </button>
    </>
  );
}

export { Recipe };
