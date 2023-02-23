// == DEFINE VARIABLES == //

// when these are clicked, details modal will show
const featureOne = document.getElementById('feature-one')
const featureTwo = document.getElementById('feature-two')
const featureThree = document.getElementById('feature-three')
const featureFour = document.getElementById('feature-four')

// these are for dom manipulation
const featureOneImg = document.getElementById('feature-one-image')
const featureTwoImg = document.getElementById('feature-two-image')
const featureThreeImg = document.getElementById('feature-three-image')
const featureFourImg = document.getElementById('feature-four-image')





// == FETCH API == //
async function getData() {
    try {
      const response = await fetch('https://fakestoreapi.com/products/');
      const data = await response.json();
      console.log(data);
        featureOneImg.src = data[0].image
        featureTwoImg.src = data[1].image
        featureThreeImg.src = data[2].image
        featureFourImg.src = data[3].image
    } catch (error) {
      console.error(error);
    }
  }
getData()

