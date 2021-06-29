This project was developed as an alternative for todo must-do project in the web dev student path. 

The structure of the order class is commented to be taken as reference for javascript development. 

The dataset attribute was used to identify each element and define their state and actions. 

Datasets are set when orders are selected
```javascript
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
```

And used as reference to define actions
```javascript
if(item.classList[0]==='unshipped-orders'){
        filteredItems.forEach((orders) => {
            if(orders.dataset.status==='unshipped'){
                orders.style.display='flex';
            } else{
                orders.style.display='none';
            }
        })
```