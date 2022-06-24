import React from 'react';
import { Switch, Route } from 'react-router';
import AppProvider from './context/LoginProvider';
import RevenuesProvider from './context/RevenuesProvider';
import Login from './pages/Login';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import Explore from './pages/Explore';
import ExploreFoods from './pages/ExploreFoods';
import ExploreDrinks from './pages/ExploreDrinks';
import Profile from './pages/Profile';
import ExploreNacionalities from './pages/ExploreNacionalities';
import FoodsIngredients from './pages/FoodsIngredients';
import DrinksIngredients from './pages/DrinksIngredients';
import Favoritos from './pages/Favoritos';
import DoneRecipes from './pages/DoneRecipes';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CategoriesProvider from './context/CategoriesProvider';

function App() {
  return (
    <AppProvider>
      <RevenuesProvider>
        <CategoriesProvider>
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/foods" component={ Foods } />
            <Route exact path="/explore/foods" component={ ExploreFoods } />
            {/* <Route exact path="/foods/{id-da-receita}" />
        <Route exact path="/foods/{id-da-receita}/in-progress" /> */}
            <Route
              exact
              path="/explore/foods/ingredients"
              component={ FoodsIngredients }
            />
            <Route exact path="/drinks" component={ Drinks } />
            <Route exact path="/explore/drinks" component={ ExploreDrinks } />
            {/* <Route exact path="/drinks/{id-da-receita}" />
        <Route extact path="/drinks/{id-da-receita}/in-progress" /> */}
            <Route exact path="/drinks/{id-da-receita}" />
            <Route exact path="/drinks/{id-da-receita}/in-progress" />
            <Route
              exact
              path="/explore/drinks/ingredients"
              component={ DrinksIngredients }
            />
            <Route exact path="/explore" component={ Explore } />
            <Route exact path="/profile" component={ Profile } />
            <Route
              exact
              path="/explore/foods/nationalities"
              component={ ExploreNacionalities }
            />
            <Route exact path="/favorite-recipes" component={ Favoritos } />
            <Route exact path="/done-recipes" component={ DoneRecipes } />
          </Switch>
        </CategoriesProvider>
      </RevenuesProvider>
    </AppProvider>
  );
}

export default App;
