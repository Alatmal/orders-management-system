
//Variables
const addOrder= document.querySelector('.add-button');
const orderForm= document.querySelector('.form-input');
const addInput= document.querySelector('.submit-input')
const orderContainer= document.querySelector('.orders-container');
const filterList= document.querySelector('.filter-option');


//Input values
const inputNumber = document.querySelector('#input-number');
const customerName= document.querySelector('#customer-name')
const address= document.querySelector('#address');
const carrier= document.querySelector('#carrier');



// EVENT LISTENERS
addOrder.addEventListener('click', addFunc)
orderForm.addEventListener('submit', newOrder)
orderContainer.addEventListener('click', pickOrder);
filterList.addEventListener('click', filterFunc);




//FUNCTIONS
function addFunc(e){
    e.preventDefault();
    addOrder.style.display= 'none';
    orderForm.style.display='grid';
}

function newOrder(e){
    
   
    //Create the order
    let orderCard= document.createElement('div');
    orderCard.classList.add('order');
    orderContainer.appendChild(orderCard);
    //Child Element Customer
    let customerInfo= document.createElement('div');
    customerInfo.classList.add('customer');
    customerInfo.innerHTML=`<i class="fas fa-user"></i><span class="customer-name">${customerName.value}</span>`;
    orderCard.appendChild(customerInfo);

    //Child Element Parcel Info
    let parcelInfo= document.createElement('div');
    parcelInfo.classList.add('parcel-info');
    parcelInfo.innerHTML= `<span class="tracking">${inputNumber.value}</span><span class="shipping-agent">${carrier.value}<i class="fas fa-warehouse"></i></span>`
    orderCard.appendChild(parcelInfo);

    //Child Element Location
    let adrStr= address.value.split(',');
    let [country, street]= [...adrStr];
    let location= document.createElement('div')
    location.classList.add('location');
    location.innerHTML= `<div class="country"><p>Country: </p><span class="country">${country}</span></div>
    <div class="address"><p>Address: </p><span class="address">${street}</span></div>`;
    orderCard.appendChild(location);

    //Child Element Location 
    let orderStatus= document.createElement('div')
    orderStatus.classList.add('status');
    orderStatus.innerHTML= 
    `<button type="submit" class="unshipped">
    <i class="fas fa-pallet"></i>
    Unshipped
    </button>
    <button type="submit" class="in-transit">
    <i class="fas fa-truck"></i>
    In-transit
    </button>
    <button type="submit" class="delivered">
    <i class="fas fa-clipboard-check"></i>
    Delivered
    </button>`;
    orderCard.appendChild(orderStatus);
    orderCard.id= `order-${inputNumber.value}`

    inputNumber.value = '';
    customerName.value= '';
    address.value= '';
    carrier.value= '';

    e.preventDefault();
}

function pickOrder(e){
    let item= e.target;
    let orderID=  document.getElementById(item.parentElement.parentElement.id)
    if(item.classList[0]==='unshipped'){
        orderID.style.background= 'rgb(253, 207, 207)';
        orderID.dataset.status='unshipped'
    } else if(item.classList[0]==='in-transit'){
        orderID.style.background= 'rgb(193, 255, 250)';
        orderID.dataset.status='in-transit'
    } else if(item.classList[0]==='delivered'){
        orderID.style.background= 'rgb(224, 255, 176)';
        orderID.dataset.status='delivered'
    }
    
}

function filterFunc(e){
    let item = e.target;
    let filteredItems= document.querySelectorAll('.order');
    if(item.classList[0]==='unshipped-orders'){
        filteredItems.forEach((orders) => {
            if(orders.dataset.status==='unshipped'){
                orders.style.display='flex';
            } else{
                orders.style.display='none';
            }
        })
    }else if(item.classList[0]==='in-transit-orders'){
        filteredItems.forEach((orders) => {
            if(orders.dataset.status==='in-transit'){
                orders.style.display='flex';
            } else{
                orders.style.display='none';
            }
        })
    }else if(item.classList[0]==='delivered-orders'){
        filteredItems.forEach((orders) => {
            if(orders.dataset.status==='delivered'){
                orders.style.display='flex';
            } else{
                orders.style.display='none';
            }
        })
    } else if(item.classList[0]==='all-orders'){
        filteredItems.forEach((orders) => {
            orders.style.display='flex';
        })
    }

    //console.log(filteredItems[0].dataset)
}

