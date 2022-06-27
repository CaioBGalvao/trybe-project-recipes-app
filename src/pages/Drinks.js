import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
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

  const history = useHistory();
  const { location: { pathname } } = history;

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
      <Header title="Drinks" pathname={ pathname } btnSearch />
      <BtnFilter pathname={ pathname } />
      <CardList pathname={ pathname } />
      <Footer />
    </div>
  );
}

export default Drinks;
