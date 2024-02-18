







const productDefaultsDisplay = {
    displayName : "Popular Products",
    items: [
        {
            brand: "Apple",
            name: "iPhone",
            image : 'Images/loadJs/testimg.jpg'
        },
        {
            brand: "Honor",
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
const displayNone =  document.getElementById('HeadphoneDisplay');

    const nameOfDisplay = document.getElementById('nameOfDisplay')
    nameOfDisplay.innerText= productDefaultsDisplay.displayName;


    // ----- 
    const productDisplays = document.getElementById('productDisplay')
        productStore.forEach(display => {
            const columnDiv =  document.createElement('div');
              columnDiv.innerHTML = ` 
                            <div class="card card-color">
                                    <img class="p-1 shadow-lg " src="${display.image}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${display.brand} </h5>
                                    <p class="card-text"> (Write 2 lines about this product )This is a longer card with supporting text below.</p>
                                </div>
                            </div>
                `;
    productDisplays.appendChild(columnDiv)

        });

       

            
//         const displaySection = document.getElementById('displaySection');
//         const hdphnSection = document.getElementById('hdphnSection');

// console.log(displaySection, hdphnSection);

