import React, { useState, useEffect } from 'react';

import DoneButtons from '../components/DoneButtons';
import DoneComponent from '../components/DoneComponent';
import Header from '../components/Header';

export default function DoneRecipes() {
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const initialDoneRecipesFromStorage = JSON.parse(
      localStorage.getItem('doneRecipes'),
    ) || [];

    if (filter && filter === 'Food') {
      setDoneRecipes(initialDoneRecipesFromStorage.filter(
        (recipe) => recipe.type === 'food',
      ));
    }

    if (filter && filter === 'Drinks') {
      setDoneRecipes(initialDoneRecipesFromStorage.filter(
        (recipe) => recipe.type === 'drink',
      ));
    }

    if (filter !== 'Food' && filter !== 'Drinks') {
      setDoneRecipes(initialDoneRecipesFromStorage);
    }
  }, [filter]);

  return (
    <div>
      <Header pageTitle="Done Recipes" />
      <DoneButtons setFilter={ setFilter } />

      { doneRecipes.length > 0 && (
        doneRecipes.map((recipe, index) => (
          <DoneComponent
            key={ recipe.id }
            recipe={ recipe }
            index={ index }
          />
        ))
      )}

    </div>
  );
}
