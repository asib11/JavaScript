const shoppingCart = () =>{
    const productNameField = document.getElementById('product-name');
    const productQuantityField = document.getElementById('product-quantity');
    const productName = productNameField.value ;
    const productQuantity = productQuantityField.value ;
    shoppingCartDisplay(productName,productQuantity);
    productNameField.value = '';
    productQuantityField.value = '';
    setLocalStorageData(productName,productQuantity);

    
}

const shoppingCartDisplay = (name,quantity) =>{
    const url = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${name}: ${quantity}`;
    url.appendChild(li);
}

const getLocalStorageData = () =>{
    let cart = {};
    const storeCart = localStorage.getItem('cart');
    if(storeCart){
        cart = JSON.parse(storeCart);
    }
    return cart;
}

const setLocalStorageData = (name, quantity) =>{
    const cart = getLocalStorageData();
    cart[name] = quantity;
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify);
}

const displayLocalStorage = () =>{
    const savedata = getLocalStorageData();
    console.log(savedata);
    for (const product in savedata){
        const quantity = savedata[product];
        console.log(product,quantity);
        shoppingCartDisplay(product, quantity);
    }
}

displayLocalStorage();