import {createContext, useState} from 'react';
import {productsArray, getProductData} from './productsStore';

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export function CartProvider({children}) {
  const [cartPoducts, setCardProducts] = useState([]);

  // [{ id: 1 ,quantity: 2}]

  function getProductQuantity(id) {
    const quantity = cartPoducts.find(product => product.id === id)?.quantity;

    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      // product is not in cart.
      setCardProducts([
        ...cartPoducts,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      // product is in cart.
      setCardProducts(
        cartPoducts.map(product =>
          product.id === id
            ? {...product, quantity: product.quantity + 1}
            : product
        )
      );
    }
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity == 1) {
      deleteFromCart(id);
    } else {
      setCardProducts(
        cartPoducts.map(product =>
          product.id ? {...product, quantity: product.quantity - 1} : product
        )
      );
    }
  }

  function deleteFromCart(id) {
    setCardProducts(cartPoducts =>
      cartPoducts.filter(currentProduct => {
        return currentProduct.id != id;
      })
    );
  }

  function getTotalCost() {
    let totalCost = 0;
    cartPoducts.map(cartItem => {
      const productData = getProductData(cartItem.id);
      totalCost += productData.price * cartItem.quantity;
    });
    return totalCost;
  }

  const contextValue = {
    items: cartPoducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;

// Context (cart, addToCart, removeCart)
// Provider -> gives your React app access to all the things in your context
