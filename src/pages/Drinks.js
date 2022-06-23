import React from 'react';
import Header from '../components/Header';
import CardList from '../components/CardList';
import Footer from '../components/Footer';

function Drinks() {
  return (
    <div>
      <Header title="Drinks" btnSearch />
      <CardList title="Drinks" />
      <Footer />
    </div>
  );
}

export default Drinks;
