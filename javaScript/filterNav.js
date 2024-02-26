
    console.log("Filter NAV     ")


const productAllArrayToDisplay = {
    mobile: [
        {
            name: "Mobile A",
            id: 1,
            brand: "Samsung",
            display: "6.2 inches",
            storage: "128GB",
            price: 699.99,
            image: 'Images/loadJs/crop.jpg'
        },
        {
            name: "Mobile A",
            id: 1,
            brand: "Samsung",
            display: "6.2 inches",
            storage: "128GB",
            price: 699.99,
            image: 'Images/loadJs/crop.jpg'
        },
        {
            name: "Mobile A",
            id: 1,
            brand: "Samsung",
            display: "6.2 inches",
            storage: "128GB",
            price: 699.99,
            image: 'Images/loadJs/crop.jpg'
        },
        {
            name: "Mobile A",
            id: 1,
            brand: "Samsung",
            display: "6.2 inches",
            storage: "128GB",
            price: 699.99,
            image: 'Images/loadJs/crop.jpg'
        },
        {
            name: "Mobile A",
            id: 1,
            brand: "Samsung",
            display: "6.2 inches",
            storage: "128GB",
            price: 699.99,
            image: 'Images/loadJs/crop.jpg'
        },
       
     ],


    headphones: [
        {
            name: "Sony",
            model: "WH-1000XM4",
            type: "Over-Ear",
            image: 'Images/loadJs/headphone.avif',
            color: "Black",
            price: 349.99,
        },
        {
            name: "Sony",
            model: "WH-1000XM4",
            type: "Over-Ear",
            image: 'Images/loadJs/headphone.avif',
            color: "Black",
            price: 349.99,
        },
        {
            name: "Sony",
            model: "WH-1000XM4",
            type: "Over-Ear",
            image: 'Images/loadJs/headphone.avif',
            color: "Black",
            price: 349.99,
        },
        {
            name: "Sony",
            model: "WH-1000XM4",
            type: "Over-Ear",
            image: 'Images/loadJs/headphone.avif',
            color: "Black",
            price: 349.99,
        },
        {
            name: "Sony",
            model: "WH-1000XM4",
            type: "Over-Ear",
            image: 'Images/loadJs/headphone.avif',
            color: "Black",
            price: 349.99,
        },
        // ... (other headphone items)
     ],


    bluetooth: [
        {
            id: 1,
            name: "Bluetooth Device A",
            brand: "Brand A",
            chargingHours: 2,
            image: 'Images/loadJs/apple.jpg',
            battery: "3000 mAh"
        },
        {
            id: 1,
            name: "Bluetooth Device A",
            brand: "Brand A",
            chargingHours: 2,
            image: 'Images/loadJs/apple.jpg',
            battery: "3000 mAh"
        },
        {
            id: 1,
            name: "Bluetooth Device A",
            brand: "Brand A",
            chargingHours: 2,
            image: 'Images/loadJs/apple.jpg',
            battery: "3000 mAh"
        },
        {
            id: 1,
            name: "Bluetooth Device A",
            brand: "Brand A",
            chargingHours: 2,
            image: 'Images/loadJs/apple.jpg',
            battery: "3000 mAh"
        },
        // ... (other bluetooth items)
     ],


    smartwatches: [
        {
            id: 1,
            name: "Smartwatch A",
            brand: "Brand X",
            display: "1.5 inches",
            storage: "16GB",
            price: 199.99,
            image: 'Images/loadJs/smartwatch.jpg'
        },
        {
            id: 2,
            name: "Smartwatch B",
            brand: "Brand Y",
            display: "1.3 inches",
            storage: "32GB",
            price: 249.99,
            image: 'Images/loadJs/smartwatch.jpg'
        },
        {
            id: 3,
            name: "Smartwatch C",
            brand: "Brand Z",
            display: "1.8 inches",
            storage: "64GB",
            price: 299.99,
            image: 'Images/loadJs/smartwatch.jpg'
        },
        {
            id: 4,
            name: "Smartwatch D",
            brand: "Brand W",
            display: "1.7 inches",
            storage: "128GB",
            price: 349.99,
            image: 'Images/loadJs/smartwatch.jpg'
        },
     ],


    neckband: [
        {
            id: 1,
            name: "Nicban Watch A",
            brand: "Nicban",
            display: "1.5 inches",
            storage: "16GB",
            price: 199.99,
            image: 'Images/loadJs/nicban.jpg'
        },
        {
            id: 2,
            name: "Nicban Watch B",
            brand: "Nicban",
            display: "1.3 inches",
            storage: "32GB",
            price: 249.99,
            image: 'Images/loadJs/nicban.jpg'
        },
        {
            id: 3,
            name: "Nicban Watch C",
            brand: "Nicban",
            display: "1.8 inches",
            storage: "64GB",
            price: 299.99,
            image: 'Images/loadJs/nicban.jpg'
        },
        {
            id: 4,
            name: "Nicban Watch D",
            brand: "Nicban",
            display: "1.7 inches",
            storage: "128GB",
            price: 349.99,
            image: 'Images/loadJs/nicban.jpg'
        },
    ],


    charger: [
        {
            id: 1,
            name: "Charger Device A",
            brand: "Brand X",
            chargingHours: 1.5,
            image: 'Images/loadJs/charger.webp',
            battery: "5000 mAh"
        },
        {
            id: 2,
            name: "Charger Device B",
            brand: "Brand Y",
            chargingHours: 2,
            image: 'Images/loadJs/charger.webp',
            battery: "6000 mAh"
        },
        {
            id: 3,
            name: "Charger Device C",
            brand: "Brand Z",
            chargingHours: 1.8,
            image: 'Images/loadJs/charger.webp',
            battery: "5500 mAh"
        },
        {
            id: 4,
            name: "Charger Device D",
            brand: "Brand W",
            chargingHours: 2.2,
            image: 'Images/loadJs/charger.webp',
            battery: "7000 mAh"
        },
     ],


    powerbanks : [
        {
            id: 1,
            name: "Powerbank A",
            brand: "Brand X",
            chargingHours: 10,
            image: 'Images/loadJs/powerbank.webp',
            battery: "10000 mAh"
        },
        {
            id: 2,
            name: "Powerbank B",
            brand: "Brand Y",
            chargingHours: 8,
            image: 'Images/loadJs/powerbank.webp',
            battery: "8000 mAh"
        },
        {
            id: 3,
            name: "Powerbank C",
            brand: "Brand Z",
            chargingHours: 12,
            image: 'Images/loadJs/powerbank.webp',
            battery: "12000 mAh"
        },
        {
            id: 4,
            name: "Powerbank D",
            brand: "Brand W",
            chargingHours: 6,
            image: 'Images/loadJs/powerbank.webp',
            battery: "6000 mAh"
        }
     ],

    
    cables: [
     {
         id: 1,
         name: "USB Cable A",
         brand: "Brand P",
         length: "1 meter",
         connectorType: "USB Type-C",
         image: 'Images/loadJs/cable.webp',
         compatibleDevices: ["Smartphones", "Tablets", "Laptops"]
     },
     {
         id: 2,
         name: "Lightning Cable B",
         brand: "Brand Q",
         length: "2 meters",
         connectorType: "Lightning",
         image: 'Images/loadJs/cable.webp',
         compatibleDevices: ["iPhone", "iPad", "iPod"]
     },
     {
         id: 3,
         name: "Micro USB Cable C",
         brand: "Brand R",
         length: "0.5 meters",
         connectorType: "Micro USB",
         image: 'Images/loadJs/cable.webp',
         compatibleDevices: ["Android Smartphones", "Tablets", "Bluetooth devices"]
     },
     {
         id: 4,
         name: "USB-C to HDMI Cable D",
         brand: "Brand S",
         length: "1.8 meters",
         connectorType: "USB Type-C",
         image: 'Images/loadJs/cable.webp',
         compatibleDevices: ["Laptops", "Smartphones with video output support"]
     }
     ],



//  THIS Speaker ARRAY NEED SOMOE MODYFY 

    speaker: [
    {
        id: 1,
        name: "Speaker  A",
        brand: "Brand P",
        length: "1 meter",
        connectorType: "USB Type-C",
        image: 'Images/loadJs/speaker.jpg',
        compatibleDevices: ["Smartphones", "Tablets", "Laptops"]
    },
    {
        id: 2,
        name: "Speaker B",
        brand: "Brand Q",
        length: "2 meters",
        connectorType: "Lightning",
        image: 'Images/loadJs/speaker.jpg',
        compatibleDevices: ["iPhone", "iPad", "iPod"]
    },
    {
        id: 3,
        name: "Speaker C",
        brand: "Brand R",
        length: "0.5 meters",
        connectorType: "Micro USB",
        image: 'Images/loadJs/speaker.jpg',
        compatibleDevices: ["Android Smartphones", "Tablets", "Bluetooth devices"]
    },
    {
        id: 4,
        name: "Speaker",
        brand: "Brand S",
        length: "1.8 meters",
        connectorType: "USB Type-C",
        image: 'Images/loadJs/speaker.jpg',
        compatibleDevices: ["Laptops", "Smartphones with video output support"]
    }
     ],


};

const searchSection = document.getElementById('searchSection')


const mobilListInProductAll = productAllArrayToDisplay.mobile;
    function mobileNav () {

        const mobileSection = document.getElementById('mobileSection');
        const mobileHeading = document.getElementById('mobileHeading')
        mobileHeading.innerText = "Mobile";
        const mobileDisplay  =  document.getElementById('mobileDisplay');
        mobileDisplay.innerHTML = ''; 
            mobilListInProductAll.forEach(data => {
                const colForMobile = document.createElement('col')
                    colForMobile.innerHTML = `
                        <div class="card card-color">
                        <img class="p-1 shadow-lg " src="${data.image}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h6 class="card-title">${data.model} </h6>
                            
                            <h5 class="card-text"> Price: ${data.price}</h5>
                    
                            <div class="d-flex gap-2 flex-column">
                                
                            <button onclick="loadDetailsByCatagory('${data.brand}', '${data.brand}', '${data.type}', '${data.price}')" class="w-100 info fw-semibold rounded-2 order-Btn py-2 px-3 border d-inline" data-bs-toggle="modal" data-bs-target="#ClickOnModal">
                            <i class="fa-solid fa-circle-info pe-2"></i>Details
                            </button>
                         
                          
                                 <button class="W-100 bg-danger fw-semibold rounded-2 order-Btn py-2 px-3 border d-inline">Order Now</button>


                            </div>
                        </div>
                    `;
        mobileDisplay.appendChild(colForMobile);        
    });
    mobileSection.classList.remove('d-none');
        hdphnSection.classList.add('d-none');
        bluetoothSection.classList.add('d-none');
        speakerSection.classList.add('d-none')
        cableSection.classList.add('d-none')
        powerbankSection.classList.add('d-none')
        chargerSection.classList.add('d-none')
        neckbandSection.classList.add('d-none')
        smartWatchSection.classList.add('d-none');
        searchSection.classList.add('d-none')
        

    console.log("Mobile Display Clicked Now")
    };



const headphoneListProductAll = productAllArrayToDisplay.headphones;
    function headPhoneav() {
        const hdphnSection =  document.getElementById('hdphnSection');
        const HeadphoneHeading = document.getElementById('HeadphoneHeading');
              HeadphoneHeading.innerText = "HeadPhone";
        const HeadphoneDisplay = document.getElementById('HeadphoneDisplay')
              HeadphoneDisplay.innerHTML = '';
                    headphoneListProductAll.forEach(hdphnData => {
                        const colForHdphn = document.createElement('col')
                            colForHdphn.innerHTML = `
                            <div class="card card-color">
                            <img class="p-1 shadow-lg " src="${hdphnData.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h6 class="card-title">${hdphnData.model} </h6>
                            
                            <h5 class="card-text"> Price: ${hdphnData.price}</h5>
                    
                            <div class="d-flex gap-2 flex-column">
                                
                            <button onclick="loadDetailsByCatagory('${hdphnData.name}'${hdphnData.name}', '${hdphnData.model}', '${hdphnData.type}', '${hdphnData.price}')" class="w-100 info fw-semibold rounded-2 order-Btn py-2 px-3 border d-inline" data-bs-toggle="modal" data-bs-target="#ClickOnModal">
                            <i class="fa-solid fa-circle-info pe-2"></i>Details
                            </button>
                         
                          
                                 <button class="W-100 bg-danger fw-semibold rounded-2 order-Btn py-2 px-3 border d-inline">Order Now</button>

                    
                            </div>
                        </div>
                      </div

                          `;
                HeadphoneDisplay.appendChild(colForHdphn);
                    
        })
           
    hdphnSection.classList.remove('d-none');
            bluetoothSection.classList.add('d-none');
            speakerSection.classList.add('d-none')
            cableSection.classList.add('d-none')
            powerbankSection.classList.add('d-none')
            chargerSection.classList.add('d-none')
            neckbandSection.classList.add('d-none')
            smartWatchSection.classList.add('d-none');
            mobileSection.classList.add('d-none');
            searchSection.classList.add('d-none')

    // console.log("clicked Headphone")

    };


const soundListInProductAll = productAllArrayToDisplay.bluetooth;
    function BluetoothNav() {
        const bluetoothSection =  document.getElementById('bluetoothSection');
        const bluetootHeading =  document.getElementById('bluetootHeading');
              bluetootHeading.innerText =  "Bluetooth / Tws";
            const bluetoothDisplay = document.getElementById('bluetoothDisplay');
                  bluetoothDisplay.innerHTML = '';         
                        soundListInProductAll.forEach(sound=> {
                            const colForBluetooth = document.createElement('col')
                                colForBluetooth.innerHTML = `
                                <div class="card card-color">
                                <img class="p-1 shadow-lg " src="${sound.image}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${sound.brand} Catagory</h5>
                                        <p class="card-text"> (Write 2 lines about this product )</p>
                                        <button class="primary-color fw-semibold rounded-2   order-Btn  py-2 px-3 border d-inline w-100">Oder Now</button> 
                                    </div>    
                                </div> `; 
                  bluetoothDisplay.appendChild(colForBluetooth);   
                        })   

    bluetoothSection.classList.remove('d-none');
        speakerSection.classList.add('d-none')
        cableSection.classList.add('d-none')
        powerbankSection.classList.add('d-none')
        chargerSection.classList.add('d-none')
        neckbandSection.classList.add('d-none')
        smartWatchSection.classList.add('d-none');
        mobileSection.classList.add('d-none');
        hdphnSection.classList.add('d-none');
        searchSection.classList.add('d-none')
    console.log('You Clicked Bluetooth') 
}; 
 


const smartWatchListInProductAll = productAllArrayToDisplay.smartwatches;
function smartWatch() {
    const smartWatchHeading =  document.getElementById('smartWatchHeading');
          smartWatchHeading.innerText = " Smart Watch" 
    const smartWatchSection = document.getElementById('smartWatchSection')
    const smartWatchhDisplay = document.getElementById('smartWatchhDisplay')
          smartWatchhDisplay.innerHTML = '';
                smartWatchListInProductAll.forEach(watch=> {
                    const colForBluetooth = document.createElement('col')
                        colForBluetooth.innerHTML = `
                            <div class="card card-color">
                            <img class="p-1 shadow-lg " src="${watch.image}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${watch.brand} Catagory</h5>
                                    <p class="card-text"> (Write 2 lines about this product )</p>
                                    <button class="primary-color fw-semibold rounded-2   order-Btn  py-2 px-3 border d-inline w-100">Oder Now</button> 
                                </div>    
                            </div> `; 
            smartWatchhDisplay.appendChild(colForBluetooth);   
            })  


            // Image NOt Active 
    smartWatchSection.classList.remove('d-none');
        speakerSection.classList.add('d-none')
        cableSection.classList.add('d-none')
        powerbankSection.classList.add('d-none')
        chargerSection.classList.add('d-none')
        neckbandSection.classList.add('d-none')
        bluetoothSection.classList.add('d-none');
        mobileSection.classList.add('d-none');
        hdphnSection.classList.add('d-none');
        searchSection.classList.add('d-none');

    console.log('Clicked Smart Watch')
};


const neckbandListInProductAll = productAllArrayToDisplay.neckband;
    function neckband() {
        const neckbandSection = document.getElementById('neckbandSection')
        const neckbandHeading = document.getElementById('neckbandHeading');
              neckbandHeading.innerText = "Neckband"
        const neckbandDisplay =document.getElementById('neckbandDisplay')
                neckbandDisplay.innerHTML = '';
                     neckbandListInProductAll.forEach(neckbandData => {
                         const colForBluetooth = document.createElement('col')
                                 colForBluetooth.innerHTML = `
                                     <div class="card card-color">
                                     <img class="p-1 shadow-lg " src="${neckbandData.image}" class="card-img-top" alt="...">
                                         <div class="card-body">
                                             <h5 class="card-title">${neckbandData.brand} Catagory</h5>
                                             <p class="card-text"> (Write 2 lines about this product )</p>
                                             <button onclick="OnModal()"  class="primary-color fw-semibold rounded-2   order-Btn  py-2 px-3 border d-inline w-100">Oder Now</button> 
                                         </div>    
                                     </div> `; 
                neckbandDisplay.appendChild(colForBluetooth);           
            });
        
    neckbandSection.classList.remove('d-none')
        speakerSection.classList.add('d-none')
        cableSection.classList.add('d-none')
        powerbankSection.classList.add('d-none')
        chargerSection.classList.add('d-none')
        smartWatchSection.classList.add('d-none');
        bluetoothSection.classList.add('d-none');
        mobileSection.classList.add('d-none');
        hdphnSection.classList.add('d-none');
        searchSection.classList.add('d-none')




        console.log("You Clicked Neckband")
    };



const chargerListInProductAll = productAllArrayToDisplay.charger;
    function charger() {
        const chargerHeading = document.getElementById('chargerHeading');
              chargerHeading.innerText = "Charger"
        const chargerSection = document.getElementById('chargerSection')
        const chargerDisplay =document.getElementById('chargerDisplay')
              chargerDisplay.innerHTML = '';

                chargerListInProductAll.forEach( chargerData => {
                    const colForBluetooth = document.createElement('col')
                          colForBluetooth.innerHTML = `
                                <div class="card card-color">
                                <img class="p-1 shadow-lg " src="${chargerData.image}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${chargerData.brand} Catagory</h5>
                                        <p class="card-text"> (Write 2 lines about this product )</p>
                                        <button class="primary-color fw-semibold rounded-2   order-Btn  py-2 px-3 border d-inline w-100">Oder Now</button> 
                                    </div>    
                                </div> `; 
                chargerDisplay.appendChild(colForBluetooth)
                })


        chargerSection.classList.remove('d-none')
            speakerSection.classList.add('d-none')
            cableSection.classList.add('d-none')
            powerbankSection.classList.add('d-none')
            neckbandSection.classList.add('d-none')
            smartWatchSection.classList.add('d-none');
            bluetoothSection.classList.add('d-none');
            mobileSection.classList.add('d-none');
            hdphnSection.classList.add('d-none');
            searchSection.classList.add('d-none');

        console.log("You Clicked Charger")

    };

 
 const powerbankListInProductAll = productAllArrayToDisplay.powerbanks;
    function powerBank() {
        const powerbankSection = document.getElementById('powerbankSection')
        const powerbankHeading = document.getElementById('powerbankHeading');
              powerbankHeading.innerText = "powerbank"
        const powerbankDisplay =document.getElementById('powerbankDisplay')
              powerbankDisplay.innerHTML = '';
                    powerbankListInProductAll.forEach( powerbankData => {
                          const colForBluetooth = document.createElement('col')
                                colForBluetooth.innerHTML = `
                                      <div class="card card-color">
                                      <img class="p-1 shadow-lg " src="${powerbankData.image}" class="card-img-top" alt="...">
                                          <div class="card-body">
                                              <h5 class="card-title">${powerbankData.chargingHours} Catagory</h5>
                                              <p class="card-text"> Price : $500</p>
                                              <button class="primary-color fw-semibold rounded-2   order-Btn  py-2 px-3 border d-inline w-100">Oder Now</button> 
                                          </div>    
                                      </div> `; 
              powerbankDisplay.appendChild(colForBluetooth)
          })


    powerbankSection.classList.remove('d-none')
        speakerSection.classList.add('d-none')
        cableSection.classList.add('d-none')
        chargerSection.classList.add('d-none')
        neckbandSection.classList.add('d-none')
        smartWatchSection.classList.add('d-none');
        bluetoothSection.classList.add('d-none');
        mobileSection.classList.add('d-none');
        hdphnSection.classList.add('d-none');
        searchSection.classList.add('d-none');
        

        console.log("Clicked powerbank")
    };



const cablesListInProductAll =productAllArrayToDisplay.cables;
    function cable() {
        const cableSection = document.getElementById('cableSection')
        const cableHeading = document.getElementById('cableHeading');
              cableHeading.innerText = "powerbank"
        const cableDisplay =document.getElementById('cableDisplay');
                cableDisplay.innerHTML = '';
                    cablesListInProductAll.forEach( cableData => {
                          const colForBluetooth = document.createElement('col')
                                colForBluetooth.innerHTML = `
                                      <div class="card card-color">
                                      <img class="p-1 shadow-lg " src="${cableData.image}" class="card-img-top" alt="...">
                                          <div class="card-body">
                                              <h5 class="card-title">${cableData.name} Catagory</h5>
                                              <p class="card-text"> (Write 2 lines about this product )</p>
                                              <button class="primary-color fw-semibold rounded-2   order-Btn  py-2 px-3 border d-inline w-100">Oder Now</button> 
                                          </div>    
                                      </div> `; 
              cableDisplay.appendChild(colForBluetooth)
          })
        
     cableSection.classList.remove('d-none')
        speakerSection.classList.add('d-none')
        powerbankSection.classList.add('d-none')
        chargerSection.classList.add('d-none')
        neckbandSection.classList.add('d-none')
        smartWatchSection.classList.add('d-none');
        bluetoothSection.classList.add('d-none');
        mobileSection.classList.add('d-none');
        hdphnSection.classList.add('d-none');
        searchSection.classList.add('d-none');
        
        
        
        console.log('Ckicked cable')
    }


const speakerListInProductAll = productAllArrayToDisplay.speaker;
function speaker() {
    const speakerSection = document.getElementById('speakerSection')
    const speakerHeading = document.getElementById('speakerHeading');
            speakerHeading.innerText = "Speaker"
    const speakerDisplay =document.getElementById('speakerDisplay');
            speakerDisplay.innerHTML = '';
                speakerListInProductAll.forEach( speakerData => {
                      const colForBluetooth = document.createElement('col')
                            colForBluetooth.innerHTML = `
                                  <div class="card card-color">
                                  <img class="p-1 shadow-lg " src="${speakerData.image}" class="card-img-top" alt="...">
                                      <div class="card-body">
                                          <h5 class="card-title">${speakerData.name} Catagory</h5>
                                          <p class="card-text"> (Write 2 lines about this product )</p>
                                          <button onClick="infoModal()" class="primary-color fw-semibold rounded-2   order-Btn  py-2 px-3 border d-inline w-100">Oder Now</button> 
                                      </div>    
                                  </div> `; 
            speakerDisplay.appendChild(colForBluetooth)
      })
    
      speakerSection.classList.remove('d-none')
      cableSection.classList.add('d-none')
      powerbankSection.classList.add('d-none')
      chargerSection.classList.add('d-none')
      neckbandSection.classList.add('d-none')
      smartWatchSection.classList.add('d-none');
      bluetoothSection.classList.add('d-none');
      mobileSection.classList.add('d-none');
      hdphnSection.classList.add('d-none');
      searchSection.classList.add('d-none');
    console.log('Clicked speaker')

}



// ================================================================= Search Engine 







        const searchButton =  document.getElementById('searchButton');
                searchButton.addEventListener('click', function (){
                    searchSection.classList.remove('d-none')
                    speakerSection.classList.add('d-none')
                    cableSection.classList.add('d-none')
                    powerbankSection.classList.add('d-none')
                    chargerSection.classList.add('d-none')
                    neckbandSection.classList.add('d-none')
                    smartWatchSection.classList.add('d-none');
                    bluetoothSection.classList.add('d-none');
                    mobileSection.classList.add('d-none');
                    hdphnSection.classList.add('d-none');
                    // searchSection.classList.add('d-none');


                })



        function displayProduct(product) {
            const productContainer = document.getElementById("searchContainer");
        
            const productCard = document.createElement("div");
            productCard.className = "col";
        
            const contentDiv = document.createElement("div");
            contentDiv.className = "card card-color";
                contentDiv.style.height = ''
                contentDiv.style.width = '';

        
            const productImage = document.createElement("img");
                    productImage.style.height = "80px";
                    productImage.style.width = "50px"
            productImage.className = "p-1 shadow-lg img-fluid";
            productImage.src = product.image; // Assuming product.image contains the image URL
            productImage.alt = "Product Image rounded";
        
            const cardBody = document.createElement("div");
            cardBody.className = "card-body d-flex justify-content-center align-items-center  justify-content-around  ";
            cardBody.style.height = " "
            cardBody.style.width= " "
        
            const productName = document.createElement("p");
            productName.style.width = '120px'
            productName.style.paddingLeft = '20px'
            productName.textContent = product.name;
        
            const productBrand = document.createElement("p");
            // productBrand.textContent = "Brand: " + product.brand;
        
            // Add the elements to the card body
            cardBody.appendChild(productImage);
            cardBody.appendChild(productName);
            cardBody.appendChild(productBrand);
        
            // Add the card body to the content div
            contentDiv.appendChild(cardBody);
        
            // Add the content div to the product card
            productCard.appendChild(contentDiv);
        
            // Add the product card to the container
            productContainer.appendChild(productCard);
        }
        
        const loadDetailsByCatagory = (title,brand,model, name, speaker, size, battery,charger, ) => {


            const modalHeader =  document.getElementById('ModalOpen')
            modalHeader.innerText = title   ;
            const modalBody =  document.getElementById('modalBody')
                    modalBody.textContent = '';
                    const ULforListModal =  document.createElement('ul');
                        
                        ULforListModal.innerHTML = `
                                    <li>Brand : ${brand}</li>
                                    <li>Model : ${model}</li> 
                                    
                                    
                                    <li>Display : ${name ? name : "<u class=' d-inline'>Not Found</u>"}</li>
                                    
                                    <li>price : ${speaker ? speaker :  "<u class=' d-inline'>Not Found</u>" }</li> 
                                                     `;
                modalBody.appendChild(ULforListModal);

            // console.log(hi)  \


        }


        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        // displayProduct(productData);
        // =========================== 

        function modalClick () {

            console.log('hello im from Modal')
        }
        
        




        
            function searchProducts() {
                const fullSearchTerm = document.getElementById("searchInput").value.toLowerCase();
                const searchTerm = fullSearchTerm.substring(0, 4); // Take only the first 4 characters
                const productContainer = document.getElementById("searchContainer");
                productContainer.innerHTML = ""; // Clear previous search results
    
                
    
    
                if (fullSearchTerm.trim() === "") {
                    console.log("Input field is required");
                    // You can also display an error message to the user or perform any other action.
                    return;
                }
            
                for (const category in productAllArrayToDisplay) {
                    const products = productAllArrayToDisplay[category];
            
                    const filteredProducts = products.filter(product => {
                        const productProperties = Object.values(product);
                        for (const property of productProperties) {
                            if (property && typeof property === "string" && property.toLowerCase().includes(searchTerm)) {
                                return true;
                            } 
                        }
                        return false;
                    });
            
                    filteredProducts.forEach(product => {
                        displayProduct(product);
                    });
                }
            }
            












        





        function OnModal() {

            console.log('clicked Modal Func')
        }



















        // ==================================================== 

