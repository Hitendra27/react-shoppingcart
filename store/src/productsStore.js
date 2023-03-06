// Coffee: price_1Mf319GmjZFYbNb9R60VsLWW
// Sunglasses: price_1Mf32jGmjZFYbNb9LROMxrTe
// Camera: price_1Mf33mGmjZFYbNb9EM0UXj9N

const productsArray = [
  {
    id: 'price_1Mf319GmjZFYbNb9R60VsLWW',
    title: 'Coffee',
    price: 4.99,
    img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 'price_1Mf32jGmjZFYbNb9LROMxrTe',
    title: 'Sunglasses',
    price: 9.99,
    img: 'https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 'price_1Mf33mGmjZFYbNb9EM0UXj9N',
    title: 'PlayStation',
    price: 39.99,
    img: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
];

function getProductData(id) {
  let productData = productsArray.find(product => product.id === id);

  if (productData === undefined) {
    console.log('Product data does not exist for ID: ' + id);
    return undefined;
  }

  return productData;
}

export {productsArray, getProductData};

// const productsArray = [
//   {
//     id: 'price_1Mf319GmjZFYbNb9R60VsLWW',
//     title: 'Coffee',
//     price: 4.99,
//     img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
//   },
//   {
//     id: '2',
//     title: 'Tea',
//     price: 5.99,
//     img: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
//   },
//   {
//     id: 'price_1Mf32jGmjZFYbNb9LROMxrTe',
//     title: 'Sunglasses',
//     price: 14.99,
//     img: 'https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
//   },
//   {
//     id: '4',
//     title: 'Shoes',
//     price: 120.99,
//     img: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2079&q=80',
//   },
//   {
//     id: '5',
//     title: 'Laptop',
//     price: 650,
//     img: 'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2151&q=80',
//   },
//   {
//     id: '6',
//     title: 'Books',
//     price: 7.99,
//     img: 'https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
//   },
//   {
//     id: '7',
//     title: 'Phone',
//     price: 899,
//     img: 'https://images.unsplash.com/photo-1592179900431-1e021ea53b28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
//   },
//   {
//     id: 'price_1Mf33mGmjZFYbNb9EM0UXj9N',
//     title: 'PlayStation',
//     price: 499,
//     img: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
//   },
// ];
