import React, { useEffect, useContext } from 'react';
import RevenuesContext from '../context/RevenuesContext';
import fetchApiDrink from '../services/fetchApiDrinks';
import Header from '../components/Header';
import CardList from '../components/CardList';
import Footer from '../components/Footer';

function Drinks() {
  const { setResultDrink } = useContext(RevenuesContext);
  useEffect(() => {
    async function populateDrink() {
      const argumento = 'search.php?s=';
      const result = await fetchApiDrink(argumento);
      setResultDrink(result);
    }
    populateDrink();
  }, [setResultDrink]);

  return (
    <div>
      <Header title="Drinks" btnSearch />
      <CardList title="Drinks" />
      <Footer />
    </div>
  );
}

export default Drinks;
