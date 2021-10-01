const unitValue = {
    tv32:1000,
    tv40:2000,
    tv43:2500,
    tv49:3000,
    tv50:3500,
    tv55:4000,
    tv58:4500,
    tv65:5000,
    tv75:5500,
    lfd:6000,
    mvw:6500
  };
  
  const productTotalValue = {
    tv32:0,
    tv40:0,
    tv43:0,
    tv49:0,
    tv50:0,
    tv55:0,
    tv58:0,
    tv65:0,
    tv75:0,
    lfd:0,
    mvw:0
  };
  
  function calculateTotal (quantity,item) {
    const totalValue = quantity * unitValue[item];
    productTotalValue[item] = totalValue;
    document.getElementById(`${item}-total`).innerHTML = `R$${totalValue}`;
  
    let sumTotal = 0;
    Object.values(productTotalValue).forEach(val => {
      sumTotal += val
    });
    document.getElementById('products-total').innerHTML = `R$${sumTotal}`;
  }
  