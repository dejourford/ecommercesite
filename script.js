// == DEFINE VARIABLES == //

// when these are clicked, details modal will show
const featureOne = document.getElementById('feature-one')
const featureTwo = document.getElementById('feature-two')
const featureThree = document.getElementById('feature-three')
const featureFour = document.getElementById('feature-four')

// THESE ARE FOR DOM MANIPULATION
// --images
const featureOneImg = document.getElementById('feature-one-image')
const featureTwoImg = document.getElementById('feature-two-image')
const featureThreeImg = document.getElementById('feature-three-image')
const featureFourImg = document.getElementById('feature-four-image')

// --product title
const featureOneTitle = document.getElementById('feature-one-title')
const featureTwoTitle = document.getElementById('feature-two-title')
const featureThreeTitle = document.getElementById('feature-three-title')
const featureFourTitle = document.getElementById('feature-four-title')

// --product prices
const featureOnePrice = document.getElementById('feature-one-price')
const featureTwoPrice = document.getElementById('feature-two-price')
const featureThreePrice = document.getElementById('feature-three-price')
const featureFourPrice = document.getElementById('feature-four-price')




// == FETCH API == //
async function getData() {
    try {
      const response = await fetch('https://fakestoreapi.com/products/');
      const data = await response.json();
      console.log(data);
        // --images
        featureOneImg.src = data[0].image
        featureTwoImg.src = data[1].image
        featureThreeImg.src = data[2].image
        featureFourImg.src = data[3].image

        // --titles
        featureOneTitle.textContent = data[0].title
        featureTwoTitle.textContent = data[1].title
        featureThreeTitle.textContent = data[2].title
        featureFourTitle.textContent = data[3].title

        // --prices
        featureOnePrice.textContent = '$' + data[0].price.toFixed(2)
        featureTwoPrice.textContent = '$' + data[1].price.toFixed(2)
        featureThreePrice.textContent = '$' + data[2].price.toFixed(2)
        featureFourPrice.textContent = '$' + data[3].price.toFixed(2)
    } catch (error) {
      console.error(error);
    }
  }
getData()

