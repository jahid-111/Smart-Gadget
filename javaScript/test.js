
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
              </div>
          </div> `;
          
          bluetoothDisplay.appendChild(colForBluetooth)
          
          bluetoothSection.classList.remove('d-none');
          mobileSection.classList.add('d-none');
          hdphnSection.classList.add('d-none');
      })

})