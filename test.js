


const prod = {
    // start obj 
    smartphones: [
        {
            brand: "Samsung",
            model: "Galaxy S21",
            color: "Black",
            price: 999.99,
            image : 'Images/loadJs/HONOR-X9a,-5G,-256GB,-Emerald-Green.png'
        },
        {
            brand: "Huwaei",
            model: "12 Pro",
            color: "Silver",
            price: 1299.99,
            image : 'Images/loadJs/HONOR-X9a,-5G,-256GB,-Emerald-Green.png'
        },
        {
            brand: "iPhone",
            model: "12 Pro",
            color: "Silver",
            price: 1299.99,
            image : 'Images/loadJs/HONOR-X9a,-5G,-256GB,-Emerald-Green.png'
        },


    ],
    // smartphones end 





    tablets: [
        {
            brand: "iPad",
            model: "Pro",
            color: "Space Gray",
            price: 1099.99,
            image : 'Images/loadJs/HONOR-X9a,-5G,-256GB,-Emerald-Green.png'
        },
        // Add more tablet products as needed
    ],

    wearables: [
        {
            brand: "Fitbit",
            model: "Versa 3",
            color: "Midnight Blue",
            price: 229.99
        },
        // Add more wearable products as needed
    ],

    smart_home: [
        {
            brand: "Nest",
            model: "Learning Thermostat",
            color: "Stainless Steel",
            price: 249.99
        },
        // Add more smart home products as needed
    ],

    electronics_gadgets: [
        {
            brand: "DJI",
            model: "Mavic Air 2",
            color: "Arctic White",
            price: 799.99
        },
        // Add more electronics gadgets as needed
    ]
};

// Example usage
// console.log(prod.smartphones[0].brand); // Outputs: "Samsung"
// console.log(prod.tablets[0].price);      // Outputs: 1099.99
// console.log(prod.wearables[0].model);    // Outputs: "Versa 3"
// console.log(prod.smart_home[0].color);   // Outputs: "Stainless Steel"
// console.log(prod.electronics_gadgets[0].price); // Outputs: 799.99


// console.log(prod.smartphones)

    const smartPhones = prod.electronics_gadgets;
    for ( const ph of smartPhones) {

        // console.log(ph.price)
    }

    console.log(prod.brand)