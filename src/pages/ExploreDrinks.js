import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreDrinks() {
  return (
    <div>
      <Header title="Explore Drinks" />
      <Link to="/explore/drinks">
        <button type="button" data-testid="explore-by-ingredient">By Ingredient</button>
      </Link>
      <Link to="/drinks">
        <button type="button" data-testid="explore-surprise">Surprise Me!</button>
      </Link>
      <Footer />
    </div>
  );
}

export default ExploreDrinks;
// falta fazer chamanda da API para buscar receita aleatória;
