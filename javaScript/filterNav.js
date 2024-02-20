// console.log("mobile.js");

const mobileDefaultsDisplay = {
    displayName: "Mobile Phones",
    items: [
        {
            name: "Mobile A",
            id: 1,
            brand: "Samsung",
            display: "6.2 inches",
            storage: "128GB",
            price: 699.99,
            image: 'Images/loadJs/testimg.jpg'
        },
        {
            name: "Mobile B",
            id: 2,
            brand: "Apple",
            display: "6.1 inches",
            storage: "256GB",
            price: 999.99,
            image: 'Images/loadJs/testimg.jpg'
        },
        {
            name: "Mobile C",
            id: 3,
            brand: "Google",
            display: "6.4 inches",
            storage: "128GB",
            price: 799.99,
            image: 'Images/loadJs/testimg.jpg'
        },
        {
            name: "Mobile D",
            id: 4,
            brand: "OnePlus",
            display: "6.7 inches",
            storage: "256GB",
            price: 899.99,
            image: 'Images/loadJs/testimg.jpg'
        },
        {
            name: "Mobile E",
            id: 5,
            brand: "Xiaomi",
            display: "6.5 inches",
            storage: "64GB",
            price: 599.99,
            image: 'Images/loadJs/testimg.jpg'
        },
        {
            name: "Mobile F",
            id: 6,
            brand: "Huawei",
            display: "6.3 inches",
            storage: "128GB",
            price: 699.99,
            image: 'Images/loadJs/testimg.jpg'
        },
        {
            name: "Mobile G",
            id: 7,
            brand: "Sony",
            display: "6.0 inches",
            storage: "256GB",
            price: 849.99,
            image: 'Images/loadJs/testimg.jpg'
        },
        {
            name: "Mobile H",
            id: 8,
            brand: "LG",
            display: "6.8 inches",
            storage: "128GB",
            price: 499.99,
            image: 'Images/loadJs/testimg.jpg'
        },
        {
            name: "Mobile I",
            id: 9,
            brand: "Motorola",
            display: "6.6 inches",
            storage: "64GB",
            price: 699.99,
            image: 'Images/loadJs/testimg.jpg'
        },
        {
            name: "Mobile J",
            id: 10,
            brand: "Nokia",
            display: "6.1 inches",
            storage: "128GB",
            price: 549.99,
            image: 'Images/loadJs/testimg.jpg'
        }
    ]
};


    const mobileSection = document.getElementById('mobileSection'); 
    const displaySection = document.getElementById('displaySection');
    const hdphnSection = document.getElementById('hdphnSection');
    const mobileHeading = document.getElementById('mobileHeading')
    mobileHeading.innerText = mobileDefaultsDisplay.displayName;
    const mobilePhone =document.getElementById('mobilePhone');
              mobilePhone.addEventListener('click', function (){
            const mobileDisplay  =  document.getElementById('mobileDisplay');
                  mobileDisplay.innerHTML = ''; // Clear previous content on each click
                    mobileDefaultsDisplay.items.forEach(data => {
                        const colForMobile = document.createElement('col')
                        colForMobile.innerHTML = `
                        <div class="card card-color">
                        <img class="p-1 shadow-lg " src="${data.image}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title"> Product Name : ${data.name}</h5>
                              
                                <button class="primary-color fw-semibold rounded-2   order-Btn  py-2 px-3 border d-inline w-100">Oder Now</button> 
                              
                            </div>
                        </div>
                            `;
                        mobileDisplay.appendChild(colForMobile);
                    });
                mobileSection.classList.remove('d-none');
                hdphnSection.classList.add('d-none');
                bluetoothSection.classList.add('d-none');
        })




    // console.log("");


    const headphoneHeader = 'Head Phone';
    const headphones = [
        {
          brand: "Sony",
          model: "WH-1000XM4",
          type: "Over-Ear",
          image : 'Images/loadJs/headphone.avif',
            image : 'Images/loadJs/headphone.avif',
          color: "Black",
          price: 349.99,
        },
        {
          brand: "Bose",
          model: "QuietComfort 35 II",
          type: "Over-Ear",
            image : 'Images/loadJs/headphone.avif',
          color: "Silver",
          price: 299.95,
        },
        {
          brand: "Sennheiser",
          model: "HD 660 S",
          type: "Over-Ear",
            image : 'Images/loadJs/headphone.avif',
          color: "Matte Black",
          price: 499.95,
        },
        {
          brand: "Audio-Technica",
          model: "ATH-M50x",
          type: "Over-Ear",
            image : 'Images/loadJs/headphone.avif',
          color: "White",
          price: 149.00,
        },
        {
          brand: "JBL",
          model: "Free X",
          type: "In-Ear",
            image : 'Images/loadJs/headphone.avif',
          color: "Blue",
          price: 99.95,
        },
        {
          brand: "Beats",
          model: "Solo Pro",
          type: "On-Ear",
            image : 'Images/loadJs/headphone.avif',
          color: "Red",
          price: 299.95,
        },
        {
          brand: "AKG",
          model: "K371",
          type: "Over-Ear",
            image : 'Images/loadJs/headphone.avif',
          color: "Matte Black",
          price: 149.00,
        },
        {
          brand: "SteelSeries",
          model: "Arctis 7",
          type: "Over-Ear",
            image : 'Images/loadJs/headphone.avif',
          color: "White",
          price: 149.99,
        },
        {
          brand: "Skullcandy",
          model: "Hesh 3",
          type: "Over-Ear",
            image : 'Images/loadJs/headphone.avif',
          color: "Black",
          price: 99.99,
        },
        {
          brand: "Plantronics",
          model: "BackBeat Pro 2",
          type: "Over-Ear",
            image : 'Images/loadJs/headphone.avif',
          color: "Brown",
          price: 199.99,
        },
      ];
      
              /**
         * =========================================================================================================================
         *                        -------------------------  HEADPHONE -------------------------     =========================================================================================================================
         */
    
    
    
      // DISPLAY CLASS LIST 
 
        const displayOfHeadPhone =  document.getElementById('hdphnSection');
        const HeadphoneHeading = document.getElementById('HeadphoneHeading');
        HeadphoneHeading.innerText = headphoneHeader;
        const headphoneBtn =  document.getElementById('headphoneBtn');
              headphoneBtn.addEventListener('click', function (){
                const productDisplay = document.getElementById('HeadphoneDisplay');
                      productDisplay.innerHTML = '';
                headphones.forEach(headphonesData => {
                    const colForHdphn = document.createElement('col')
                    colForHdphn.innerHTML = `
                    <div class="card card-color">
                    <img class="p-1 shadow-lg " src="${headphonesData.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${headphonesData.brand} Catagory</h5>
                            <p class="card-text"> (Write 2 lines about this product )</p>
                            <button class="primary-color fw-semibold rounded-2   order-Btn  py-2 px-3 border d-inline w-100">Oder Now</button> 
                        </div>
                    </div>
                    
                        `;
                productDisplay.appendChild(colForHdphn);
                displayOfHeadPhone.classList.remove('d-none');
                mobileSection.classList.add('d-none');
                bluetoothSection.classList.add('d-none');
               
    
  
            });                
        })
    

        /**
         * =========================================================================================================================
         *                        -------------------------  BLUETOOTH -------------------------     =========================================================================================================================
         */


        const bluetoothDevices = {

            bluetooth : "Bluetooth",
            devices: [
                {
                    id: 1,
                    name: "Bluetooth Device A",
                    brand: "Brand A",
                    chargingHours: 2,
                    image : 'Images/loadJs/apple.jpg',
                        image : 'Images/loadJs/apple.jpg',
                    battery: "3000 mAh"
                },
                {
                    id: 2,
                    name: "Bluetooth Device B",
                    brand: "Brand B",
                    chargingHours: 1.5,
                        image : 'Images/loadJs/apple.jpg',
                    battery: "2500 mAh"
                },
                {
                    id: 3,
                    name: "Bluetooth Device C",
                    brand: "Brand C",
                    chargingHours: 2.5,
                        image : 'Images/loadJs/apple.jpg',
                    battery: "4000 mAh"
                },
                {
                    id: 4,
                    name: "Bluetooth Device D",
                    brand: "Brand D",
                    chargingHours: 2,
                        image : 'Images/loadJs/apple.jpg',
                    battery: "3500 mAh"
                },
                {
                    id: 5,
                    name: "Bluetooth Device E",
                    brand: "Brand E",
                    chargingHours: 3,
                        image : 'Images/loadJs/apple.jpg',
                    battery: "5000 mAh"
                },
                {
                    id: 6,
                    name: "Bluetooth Device F",
                    brand: "Brand F",
                    chargingHours: 1.8,
                        image : 'Images/loadJs/apple.jpg',
                    battery: "2800 mAh"
                },
                {
                    id: 7,
                    name: "Bluetooth Device G",
                    brand: "Brand G",
                    chargingHours: 2.2,
                        image : 'Images/loadJs/apple.jpg',
                    battery: "3200 mAh"
                },
                {
                    id: 8,
                    name: "Bluetooth Device H",
                    brand: "Brand H",
                    chargingHours: 2.3,
                        image : 'Images/loadJs/apple.jpg',
                    battery: "3800 mAh"
                },
                {
                    id: 9,
                    name: "Bluetooth Device I",
                    brand: "Brand I",
                    chargingHours: 1.7,
                        image : 'Images/loadJs/apple.jpg',
                    battery: "2600 mAh"
                },
                {
                    id: 10,
                    name: "Bluetooth Device J",
                    brand: "Brand J",
                    chargingHours: 2.8,
                        image : 'Images/loadJs/apple.jpg',
                    battery: "4200 mAh"
                }
            ]
        };
        
    const bluetootHeading =  document.getElementById('bluetootHeading');
          bluetootHeading.innerText =  bluetoothDevices.bluetooth;
    const bluetoothSection =  document.getElementById('bluetoothSection');

    const bluetoothBtn = document.getElementById('bluetoothBtn');
          bluetoothBtn.addEventListener('click', function(){
            const bluetoothDisplay = document.getElementById('bluetoothDisplay');
                    bluetoothDisplay.innerHTML = ''; // Clear previous content
        
            bluetoothDevices.devices.forEach( bluetoothData => {
                const colForBluetooth = document.createElement('col')
                colForBluetooth.innerHTML = `
                <div class="card card-color">
                <img class="p-1 shadow-lg " src="${bluetoothData.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${bluetoothData.brand} Catagory</h5>
                        <p class="card-text"> (Write 2 lines about this product )</p>
                        <button class="primary-color fw-semibold rounded-2   order-Btn  py-2 px-3 border d-inline w-100">Oder Now</button> 
                    </div>
                </div> `;
                
                bluetoothDisplay.appendChild(colForBluetooth);
            });
            bluetoothSection.classList.remove('d-none');
            mobileSection.classList.add('d-none');
            hdphnSection.classList.add('d-none');
        })


        