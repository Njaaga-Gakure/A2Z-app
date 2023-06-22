import styled from "styled-components";
import { useCartContext } from "../contexts/cart_context"
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import { Link } from "react-router-dom"
import { CartTotals } from "./CartTotals";
const CartContent = () => {
  const { cart, clearCart } = useCartContext()
  return (
    <Wrapper className="center-content">
      <CartColumns />
      {cart.map(item => {
        return <CartItem key={item.id} {...item} />
      })}
      <hr />
      <div className="cart-btn-container">
        <Link className="cart-btn" to="/products">
          continue shopping
        </Link>
        <button 
          className="cart-btn clear-btn"
          onClick={clearCart}  
          >
          clear cart
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  )
}
const Wrapper = styled.section`
text-align: left;
margin-bottom: 1rem;
.cart-btn-container {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  .cart-btn {
    display: inline-block;
    background: var(--primary-600);
    border: transparent;
    padding: 0.25rem 1.5rem;
    border-radius: var(--border-radius);
    color: var(--white);
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    transition: var(--transition);
    &:hover {
      background: var(--primary-400);
    }
  }
  .clear-btn {
    background: var(--gray-900);
    &:hover {
      background: var(--gray-600);
    }
  }
}
`
export default CartContent