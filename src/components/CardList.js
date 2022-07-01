import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RevenuesContext from '../context/RevenuesContext';

function CardList({ pathname }) {
  const {
    resultDrink,
    resultFood,
  } = useContext(RevenuesContext);

  const history = useHistory();

  const NUMBER_TWELVE = 12;
  const { meals } = resultFood;
  const { drinks } = resultDrink;

  const foodRenderCard = () => (meals.length > 0
    ? meals.slice(0, NUMBER_TWELVE).map((recipe, index) => (
      <Col key={ recipe.idMeal }>
        <Card
          onClick={ () => { history.push(`${pathname}/${recipe.idMeal}`); } }
          data-testid={ `${index}-recipe-card` }
          className=" m-2 bg-light rounded"
        >

          <Card.Img
            variant="top"
            className="img-thumbnail"
            data-testid={ `${index}-card-img` }
            src={ recipe.strMealThumb }
            alt={ recipe.strMeal }
          />
          <Card.Body>
            <Card.Title
              data-testid={ `${index}-card-name` }
              className="text-center text-decoration-none"
            >
              {recipe.strMeal}

            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    ))
    : null);

  const drinkRenderCard = () => (drinks.length > 1
    ? drinks.slice(0, NUMBER_TWELVE).map((recipe, index) => (
      <Col
        key={ recipe.idDrink }
      >
        <Card
          onClick={ () => { history.push(`${pathname}/${recipe.idMeal}`); } }
          data-testid={ `${index}-recipe-card` }
        >
          <Card.Img
            data-testid={ `${index}-card-img` }
            src={ recipe.strDrinkThumb }
            alt={ recipe.strDrink }
            width="300" // Propriedade para passar no Cypress (ALTERAR POR UMA CSS)
          />
          <Card.Body>
            <Card.Title
              data-testid={ `${index}-card-name` }
            >
              {recipe.strDrink}

            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    ))
    : null);

  if (pathname === '/foods') {
    return (
      <Row xs={ 2 } md={ 4 }>
        {foodRenderCard()}
      </Row>
    );
  }
  if (pathname === '/drinks') {
    return (
      <Row xs={ 2 } md={ 4 }>
        {drinkRenderCard()}
      </Row>
    );
  }
}

CardList.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default CardList;
