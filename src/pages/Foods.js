import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
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

  const history = useHistory();
  const { location: { pathname } } = history;

  useEffect(() => {
    async function populateMeal() {
      const argumento = 'search.php?s=';
      const result = await fetchApiFood(argumento);
      setResultFood(result);
    }
    populateMeal();
    requestCategories('/foods');
  }, [requestCategories, setResultFood]);

  return (
    <div>
      <Header title="Foods" pathname={ pathname } btnSearch />
      <BtnFilter pathname={ pathname } />
      <CardList pathname={ pathname } />
      <Footer />
    </div>
  );
}
