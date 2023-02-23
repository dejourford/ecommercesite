// == DEFINE VARIABLES == //
const featureOne = document.getElementById('feature-one')
const featureTwo = document.getElementById('feature-two')
const featureThree = document.getElementById('feature-three')
const featureFour = document.getElementById('feature-four')






// == FETCH API == //
async function getData() {
    try {
      const response = await fetch('https://fakestoreapi.com/products/');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
getData()

