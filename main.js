//task 2
const productlist= document.getElementById('products');
//Fetch product data and display basic information
fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
        if(!response.ok) {
            throw new Error ('no available product');

        }
        return response.json();
    })
    .then(products => {
        products.forEach(product =>{
            const listItem = document.createElement('li');
            listItem.textContent= '${product.title} - $${product.price}'
            productlist.appendChild(listItem);
        
        });
    })
    .catch(error => {
        console.error('There was a problem.', error);

    })

    //task 3
    const productList = document.getElementById('products');

    // Use a proxy to avoid CORS issues during development
    const apiUrl = https://www.course-api.com/javascript-store-product;
    
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const listItem = document.createElement('li');
                listItem.textContent = `${compant.name} - $${product.price}-${product.name}-${product.image}`;
                productList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
