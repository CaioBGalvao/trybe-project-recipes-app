const fetchApiDrink = async (argumento) => {
  try {
    const promise = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/${argumento}`);
    const results = await promise.json();
    return results;
  } catch (error) {
    console.log(error);
  }
};

export default fetchApiDrink;
