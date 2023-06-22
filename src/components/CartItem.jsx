import styled from "styled-components";
import { useCartContext } from "../contexts/cart_context"
import { priceFormat } from "../utils/helpers-functions";
import AmountButtons from "./AmountButtons"
import { FaTrashAlt } from "react-icons/fa"

const CartItem = ({ id, image, name, color, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext()
  const increase = () => {
    toggleAmount(id, "increase")
  }
  const decrease = () => {
    toggleAmount(id, "decrease")
  }
  return (
    <Wrapper>
      <div className="item">
          <img src={image} className="cart-img" alt={name} />
          <div>
            <p>{name}</p>
            <p className="sm-price">{priceFormat(price)}</p>
            <p className="color">color : <span style={{ background: color }}></span></p>
          </div>
      </div>
      <h5 className="bg-price">{priceFormat(price)}</h5>
      <AmountButtons increase={increase} decrease={decrease} amount={amount} />
      <h5 className="sub-total">
        {priceFormat(price * amount)}
      </h5>
      <button className="remove-btn" onClick={() => removeItem(id)}><FaTrashAlt /></button>
    </Wrapper>
  )
}
const Wrapper = styled.article`
 margin: 1rem 0;
 display: grid;
 align-items: center;
 grid-template-columns: 200px auto auto;
 p {
  margin: 0;
  letter-spacing: var(--letter-spacing);
  text-transform: capitalize;
  color: var(--gray-800);
 }
 
 .item {
   display: flex;
   align-items: center;
   gap: .5rem;
  }
  .cart-img {
    width: 75px;
    height: 75px;
    
  }
  .color {
   display: flex;
   gap: .5rem;
   align-items: center;
   font-size: .8rem;
   span {
     display: inline-block;
     width: 1rem;
     height: 1rem;
     border-radius: 50%;
   }
  }
  .sm-price {
    color: var(--primary-700);
    font-size: 0.75rem;
    letter-spacing: var(--letter-spacing);
  }
  .bg-price, 
  .sub-total {
    display: none;
  }
  .remove-btn {
    background: transparent;
    border-color: transparent;
    justify-self: center;
    align-items: center;
    justify-content: center;
    display: flex;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--primary-500);
    }
  }
  @media (min-width: 800px) {
    grid-template-columns: 290px 1fr 1fr 1fr auto;
     .sm-price {
      display: none;
     }
    .bg-price, 
    .sub-total {
      display: block;
      font-size: 1rem;
      color: var(--primary-700);
      letter-spacing: 2px;
    }
  }
`
export default CartItem