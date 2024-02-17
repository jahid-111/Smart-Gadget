







const productDefaultsDisplay = {
    items: [
        {
            brand: "Apple",
            name: "iPhone",
            image : 'Images/loadJs/testimg.jpg'
        },
        {
            brand: "Apple",
            name: "iPad",
            image : 'Images/loadJs/testimg.jpg'
        },
        {
            brand: "Apple",
            name: "iPad",
            image : 'Images/loadJs/testimg.jpg'
        },
        {
            brand: "Apple",
            name: "iPad",
            image : 'Images/loadJs/testimg.jpg'
        },
        {
            brand: "Apple",
            name: "iPad",
            image : 'Images/loadJs/testimg.jpg'
        },
        {
            brand: "Apple",
            name: "iPad",
            image : 'Images/loadJs/testimg.jpg'
        },
        {
            brand: "Apple",
            name: "iPad",
            image : 'Images/loadJs/testimg.jpg'
        },
        {
            brand: "Apple",
            name: "iPad",
            image : 'Images/loadJs/testimg.jpg'
        },
        


    ]
};

const productStore =  productDefaultsDisplay.items;

    const productDisplays = document.getElementById('productDisplay')
    productStore.forEach(display => {
        const columnDiv =  document.createElement('div');
        columnDiv.innerHTML = ` 
                        <div class="card card-color">
                                <img class="p-1 shadow-lg " src="${display.image}" class="card-img-top" alt="...">
                             <div class="card-body">
                                 <h5 class="card-title">Product Catagory</h5>
                                 <p class="card-text"> (Write 2 lines about this product )This is a longer card with supporting text below.</p>
                             </div>
                         </div>
            `;
        // console.log(columnDiv)
        productDisplays.appendChild(columnDiv)


    });