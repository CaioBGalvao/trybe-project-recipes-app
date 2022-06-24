import React, { useEffect, useContext } from 'react';
import RevenuesContext from '../context/RevenuesContext';
import fetchApiFood from '../services/fetchApiFood';
import Header from '../components/Header';
import CardList from '../components/CardList';
import Footer from '../components/Footer';
import BtnFilter from '../components/BtnFilter';

export default function Foods() {
  const { setResultFood } = useContext(RevenuesContext);
  useEffect(() => {
    async function populateMeal() {
      const argumento = 'search.php?s=';
      const result = await fetchApiFood(argumento);
      setResultFood(result);
    }
    populateMeal();
  }, [setResultFood]);

  return (
    <div>
      <Header title="Foods" />
      <BtnFilter />
      <CardList title="Foods" />
      <Footer />
    </div>
  );
}
