







    const productDefaultsDisplay = {
        displayName : "Popular Products",
            
        items: [
            {

                brand: "Apple",
                price :     1000,
                catagoty : "Smart Phone",
                model : "Apple 13 Pro Max",
                Os : "Apple IOS",
                processor : "2.3GHz",
                celular : "5G",
                storge : "512",
                ram : "8GB",
                display : '',
                size : '5.6" inch',
                image : 'Images/loadJs/testimg.jpg'    

            },
           
            {

                brand: "Apple",
                price : 1000,
                catagoty : "Smart Phone",
                model : "Apple 13 Pro Max",
                Os : "Apple IOS",
                processor : "2.3GHz",
                celular : "5G",
                storge : "512",
                ram : "8GB",
                display : "Oled ++",
                size : '5.6" inch',
                image : 'Images/loadJs/testimg.jpg'    

            },
           
            {

                brand: "Apple",
                price : 1000,
                catagoty : "Smart Phone",
                model : "Apple 13 Pro Max",
                Os : "Apple IOS",
                processor : "2.3GHz",
                celular : "5G",
                storge : "512",
                ram : "8GB",
                display : "Oled ++",
                size : '5.6" inch',
                image : 'Images/loadJs/testimg.jpg'    

            },
           
            {

                brand: "Apple",
                price : 1000,
                catagoty : "Smart Phone",
                model : "Apple 13 Pro Max",
                Os : "Apple IOS",
                processor : "2.3GHz",
                celular : "5G",
                storge : "512",
                ram : "8GB",
                display : "Oled ++",
                size : '5.6" inch',
                image : 'Images/loadJs/testimg.jpg'    

            },
           
            {

                brand: "Apple",
                price : 1000,
                catagoty : "Smart Phone",
                model : "Apple 13 Pro Max",
                Os : "Apple IOS",
                processor : "2.3GHz",
                celular : "5G",
                storge : "512",
                ram : "8GB",
                display : "Oled ++",
                size : '5.6" inch',
                image : 'Images/loadJs/testimg.jpg'    

            },
           
            {

                brand: "Apple",
                price : 1000,
                catagoty : "Smart Phone",
                model : "Apple 13 Pro Max",
                Os : "Apple IOS",
                processor : "2.3GHz",
                celular : "5G",
                storge : "512",
                ram : "8GB",
                display : "Oled ++",
                size : '5.6" inch',
                image : 'Images/loadJs/testimg.jpg'    

            },
           
            {

                brand: "Apple",
                price : 1000,
                catagoty : "Smart Phone",
                model : "Apple 13 Pro Max",
                Os : "Apple IOS",
                processor : "2.3GHz",
                celular : "5G",
                storge : "512",
                ram : "8GB",
                display : "Oled ++",
                size : '5.6" inch',
                image : 'Images/loadJs/testimg.jpg'    

            },
           
            {

                brand: "Apple",
                price : 1000,   
                catagoty : "Smart Phone",
                model : "Apple 13 Pro Max",
                Os : "Apple IOS",
                processor : "2.3GHz",
                celular : "5G",
                storge : "512",
                ram : "8GB",
                display : "Oled ++",
                size : '5.6" inch',
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
        <h6 class="card-title">${display.model} </h6>
        
        <h5 class="card-text"> Price: ${display.price}</h5>

        <div class="d-flex gap-2 flex-column">
            
              <button onclick="loadDetails('${display.brand}', '${display.model}','${display.Os}','${display.celular}','${display.storge}','${display.ram}','${display.display}')" class="w-100 info fw-semibold rounded-2 order-Btn py-2 px-3 border d-inlin" data-bs-toggle="modal" data-bs-target="#ClickOnModal"><i class="fa-solid fa-circle-info pe-2"></i>Details
             </button>   
      
        <button onclick="oderButton()"  class="W-100 bg-danger   fw-semibold rounded-2 order-Btn  py-2 px-3 border d-inlin" > Order Now</button> 

        </div>
    </div>
  </div
                `;
    productDisplays.appendChild(columnDiv)

        });

        const loadDetails = (hi, model, os,celular,storge,ram, display) => {
            // console.log( "ID Number",hi,display,name)
        const modalHeader =  document.getElementById('ModalOpen')
            modalHeader.innerText = model;
            const modalBody =  document.getElementById('modalBody')
                    modalBody.textContent = '';
                    const ULforListModal =  document.createElement('ul');
                        
                        ULforListModal.innerHTML = `
                                    <li>Brand : ${hi}</li>
                                    <li>Model : ${model}</li>
 
                                    <li> Operating Sistem : ${os}</li>
                                    <li>Display : ${display ? display : "<u class=' d-inline'>Not Found</u>"}</li>
                                    <li>Celular : ${celular}</li>
                                    <li>Storgr : ${storge}</li>
                                    <li>RAM : ${ram}</li>
                                                     `;
                modalBody.appendChild(ULforListModal);
        }












function oderButton() {
    console.log("Need To crerat New Page")  
}


//  ========================= just Enough //



