import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import '../styles/Footer.css';
import PropTypes from 'prop-types';

export default function Footer() {
  const [redirectToDrinks, setRedirectToDrinks] = useState(false);
  const [redirectToExplore, setRedirectToExplore] = useState(false);
  const [redirectToFoods, setRedirectToFoods] = useState(false);

  useEffect(() => {
    const resetAllRedirects = () => {
      setRedirectToDrinks(false);
      setRedirectToExplore(false);
      setRedirectToFoods(false);
    };

    return resetAllRedirects();
  }, []);

  return (
    <footer className="footer__footer" data-testid="footer">
      <section className="btn__row">

        <button
          className=" btn__drinks"
          type="button"
          data-testid="drinks-bottom-btn"
          onClick={ () => setRedirectToDrinks(true) }
        >
          <span className="noShow">Drinks</span>
        </button>
        <button
          className=" btn__explore"
          type="button"
          data-testid="explore-bottom-btn"
          onClick={ () => setRedirectToExplore(true) }
        >
          <span className="noShow">Explore</span>
        </button>
        <button
          className=" btn__foods"
          type="button"
          data-testid="food-bottom-btn"
          onClick={ () => setRedirectToFoods(true) }
        >
          <span className="noShow">Foods</span>
        </button>
      </section>

      {redirectToDrinks && <Redirect to="/drinks" />}
      {redirectToExplore && <Redirect to="/explore" />}
      {redirectToFoods && <Redirect to="/foods" />}
    </footer>
  );
}

Footer.propTypes = {
  history: PropTypes.object,
}.isRequired;
