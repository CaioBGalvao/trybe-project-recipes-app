import React, { useEffect, useContext } from 'react';
import RevenuesContext from '../context/RevenuesContext';
import CategoriesContext from '../context/CategoriesContext';
import fetchApiFood from '../services/fetchApiFood';
import Header from '../components/Header';
import BtnFilter from '../components/BtnFilter';
import CardList from '../components/CardList';
import Footer from '../components/Footer';

export default function Foods() {
  const { setResultFood } = useContext(RevenuesContext);
  const { requestCategories } = useContext(CategoriesContext);

  useEffect(() => {
    async function populateMeal() {
      const argumento = 'search.php?s=';
      const result = await fetchApiFood(argumento);
      setResultFood(result);
    }
    populateMeal();
    console.log('Estou sendo chamado?');
    requestCategories('/foods'); // <<<<<<< ERRO
  }, [requestCategories, setResultFood]);

  return (
    <div>
      <Header title="Foods" btnSearch />
      <BtnFilter title="Foods" />
      <CardList title="Foods" />
      <Footer />
    </div>
  );
}
