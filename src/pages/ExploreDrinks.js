import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreDrinks() {
  const [getSurpriseApi, setSurpriseApi] = useState([{ idDrink: '' }]);
  useEffect(() => {
    const surpriseApi = async () => {
      const endPointSurprise = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
      const responseFetcher = await fetch(endPointSurprise);
      const { drinks } = await responseFetcher.json();
      setSurpriseApi(drinks);
    };
    surpriseApi();
  }, []);
  return (
    <div>
      <Header title="Explore Drinks" />
      <Link to="/explore/drinks/ingredients">
        <button type="button" data-testid="explore-by-ingredient">By Ingredient</button>
      </Link>
      <Link to={ `/drinks/${getSurpriseApi[0].idDrink}` }>
        <button type="button" data-testid="explore-surprise">Surprise me!</button>
      </Link>
      <Footer />
    </div>
  );
}

export default ExploreDrinks;
// falta fazer chamanda da API para buscar receita aleatória;
