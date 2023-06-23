import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTAL,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../action";

const cartReducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;
    const tempItem = state.cart.find((item) => item.id === id + color);
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + color) {
          let newAmount = cartItem.amount + amount;
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === REMOVE_CART_ITEM) {
    const newCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: newCart };
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;
    const newCart = state.cart.map((item) => {
      if (item.id === id) {
        let newAmount = item.amount;
        if (value === "increase") {
          newAmount = newAmount + 1;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
        } else if (value === "decrease") {
          newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
        }
        return { ...item, amount: newAmount };
      }
      return item;
    });
    return { ...state, cart: newCart };
  }
  if (action.type === COUNT_CART_TOTAL) {
    const { total_amount, total_items } = state.cart.reduce(
      (total, currentCartItem) => {
        total.total_amount += currentCartItem.amount * currentCartItem.price;
        total.total_items += currentCartItem.amount;
        return total;
      },
      { total_amount: 0, total_items: 0 }
    );
    // console.log(total_items, total_amount);
    return { ...state, total_items, total_amount };
  }
  throw new Error(`no action matching ${action.type} type`);
};

export default cartReducer;
