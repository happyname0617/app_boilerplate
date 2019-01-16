const fetchFood = (URL = process.env.FOOD_URL!) =>
  fetch(URL)
    .then(resp => resp.json())
    .catch(reason => console.error(reason))

export default fetchFood
