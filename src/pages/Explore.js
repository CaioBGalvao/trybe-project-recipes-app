import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Explore() {
  return (
    <>
      <Header title="Explore" />
      <Link to="/explore/foods">
        <button
          type="button"
          data-testid="explore-foods"
        >
          Explore Foods

        </button>
      </Link>
      <Link to="/explore/drinks">
        <button
          type="button"
          data-testid="explore-drinks"
        >
          Explore Drinks

        </button>
      </Link>
      <Footer />
    </>
  );
}

export default Explore;
