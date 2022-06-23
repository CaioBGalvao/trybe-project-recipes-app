const fetchApiFood = async (argumento) => {
  try {
    const promise = await fetch(`https://www.themealdb.com/api/json/v1/1/${argumento}`);
    const results = await promise.json();
    return results;
  } catch (error) {
    console.log(error);
  }
};

export default fetchApiFood;
