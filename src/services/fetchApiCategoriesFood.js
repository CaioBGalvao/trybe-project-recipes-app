const fetchApiCategoriesFood = async () => {
  try {
    const promise = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
    const results = await promise.json();
    return results;
  } catch (error) {
    console.log(error);
  }
};

export default fetchApiCategoriesFood;
