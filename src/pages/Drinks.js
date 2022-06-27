import React, { useEffect, useContext } from 'react';
import RevenuesContext from '../context/RevenuesContext';
import CategoriesContext from '../context/CategoriesContext';
import fetchApiDrink from '../services/fetchApiDrinks';
import Header from '../components/Header';
import BtnFilter from '../components/BtnFilter';
import CardList from '../components/CardList';
import Footer from '../components/Footer';

function Drinks() {
  const { setResultDrink } = useContext(RevenuesContext);
  const { requestCategories } = useContext(CategoriesContext);

  useEffect(() => {
    async function populateDrink() {
      const argumento = 'search.php?s=';
      const result = await fetchApiDrink(argumento);
      setResultDrink(result);
    }
    populateDrink();
    requestCategories('/drinks');
  }, [requestCategories, setResultDrink]);

  return (
    <div>
      <Header title="Drinks" btnSearch />
      <BtnFilter title="Drinks" />
      <CardList title="Drinks" />
      <Footer />
    </div>
  );
}

export default Drinks;
