console.log("write 10 object an array of headphone")


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
  





    const displaySection = document.getElementById('displaySection');
    const displayOfHeadPhone =  document.getElementById('hdphnSection');
    const headphoneBtn =  document.getElementById('headphoneBtn');
    
    const HeadphoneHeading = document.getElementById('HeadphoneHeading');
            HeadphoneHeading.innerText = headphoneHeader;

    // console.log(headphoneBtn)

    headphoneBtn.addEventListener('click', function (){
        const productDisplay = document.getElementById('HeadphoneDisplay');
        headphones.forEach(headphonesData => {
                // console.log(headphonesData.brand)
                const colForHdphn = document.createElement('col')
                colForHdphn.innerHTML = `
                <div class="card card-color">
                <img class="p-1 shadow-lg " src="${headphonesData.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${headphonesData.brand} Catagory</h5>
                        <p class="card-text"> (Write 2 lines about this product )This is a longer card with supporting text below.</p>
                    </div>
                </div>
                
                    `;
            productDisplay.appendChild(colForHdphn);
        
        displaySection.classList.add('d-none');
        displayOfHeadPhone.classList.remove('d-none')


            

        });

        
        
        

        
            


    })
