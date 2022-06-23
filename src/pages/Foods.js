import React, { useEffect, useContext } from 'react';
import RevenuesContext from '../context/RevenuesContext';
import fetchApiFood from '../services/fetchApiFood';
import Header from '../components/Header';
import CardList from '../components/CardList';

export default function Foods() {
  const { setResultFood } = useContext(RevenuesContext);
  useEffect(() => {
    const argumento = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    setResultFood(fetchApiFood(argumento));
  }, [setResultFood]);

  return (
    <div>
      <Header title="Foods" />
      <CardList title="Foods" />
    </div>
  );
}
