import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreFoods() {
  const [getSurpriseApi, setSurpriseApi] = useState([{ idMeal: '' }]);
  useEffect(() => {
    const surpriseApi = async () => {
      const endPointSurprise = 'https://www.themealdb.com/api/json/v1/1/random.php';
      const responseFetcher = await fetch(endPointSurprise);
      const { meals } = await responseFetcher.json();
      setSurpriseApi(meals);
    };
    surpriseApi();
  }, []);

  return (
    <div>
      <Header title="Explore Foods" btnSearch />
      <Link to="/explore/foods/ingredients">
        <button type="button" data-testid="explore-by-ingredient">By Ingredient</button>
      </Link>
      <Link to="/explore/foods/nationalities">
        <button
          type="button"
          data-testid="explore-by-nationality"
        >
          By Nationality
        </button>
      </Link>
      <Link to={ `/foods/${getSurpriseApi[0].idMeal}` }>
        <button
          type="button"
          data-testid="explore-surprise"
        >
          Surprise me!

        </button>
      </Link>
      <Footer />
    </div>
  );
}

export default ExploreFoods;

// falta fazer chamanda da API para buscar receita;
// - Ao clicar no botão "Surprise me!" da tela de explorar comidas a rota muda para a página de detalhes de uma comida aleatória
