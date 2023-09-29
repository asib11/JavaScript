const shoppingCart = () =>{
    const productNameField = document.getElementById('product-name');
    const productQuantityField = document.getElementById('product-quantity');
    const productName = productNameField.value ;
    const productQuantity = productQuantityField.value ;
    shoppingCartDisplay(productName,productQuantity);
    productNameField.value = '';
    productQuantityField.value = '';

    
}

const shoppingCartDisplay = (name,quantity) =>{
    const url = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${name}: ${quantity}`;
    url.appendChild(li);
}