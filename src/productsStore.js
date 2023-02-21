const productsArray = [
  {
    id: '1',
    title: 'Coffee',
    price: 4.99,
  },
  {
    id: '2',
    title: 'Tea',
    price: 5.99,
  },
  {
    id: '3',
    title: 'Sunglasses',
    price: 14.99,
  },
  {
    id: '4',
    title: 'Hat',
    price: 12.99,
  },
];

function getProductData(id) {
  let productData = productsArray.find(product => product.id === id);

  if (productData == undefined) {
    console.log('Product data does not exist for ID: ' + id);
    return undefined;
  }

  return productData;
}

export {productsArray, getProductData};
