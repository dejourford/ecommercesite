// == DEFINE VARIABLES == //

const featureWrapper = document.querySelector('.featureWrapper')
const features = document.querySelector('.features')


// == FETCH API == //
async function getData() {
    try {
      const response = await fetch('https://fakestoreapi.com/products/');
      const data = await response.json();
      console.log(data);
        // --MENS PAGE
        for (let i = 0; i < data.length - 1; i++){
            console.log(data[i].category)
            if (data[i].category == "jewelery"){

              const feature = document.createElement('div')
              feature.setAttribute('class', 'feature')
              feature.setAttribute('id', `feature`)
              featureWrapper.appendChild(feature)
  
              const img = document.createElement('img')
              img.setAttribute('class', 'example')
              img.setAttribute('id', 'feature-one-image')
              img.src = data[i].image
              feature.appendChild(img)
  
              var title = document.createElement('span')
              title.setAttribute('class', 'itemTitle')
              title.setAttribute('id', 'feature-one-title')
              title.textContent = data[i].title
              feature.appendChild(title)
  
              var span = document.createElement('span')
              span.setAttribute('class', 'itemPrice')
              span.setAttribute('id', 'feature-one-price')
              span.textContent = '$' + data[i].price.toFixed(2)
              feature.appendChild(span)
              featureWrapper.appendChild(feature)
              features.appendChild(featureWrapper)
            }
            
        }
    
        
    
    } catch (error) {
      console.error(error);
    }
  }
getData()