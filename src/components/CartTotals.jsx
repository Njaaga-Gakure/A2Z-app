import styled from "styled-components"
import { useCartContext } from "../contexts/cart_context"
import { priceFormat } from "../utils/helpers-functions"
import { Link } from "react-router-dom"
export const CartTotals = () => {
  const { total_amount } = useCartContext()
  return (
    <Wrapper>
      <article>
        <h5>order total : <span>{priceFormat(total_amount)}</span></h5>
      </article>
      <Link className="checkout-btn" to="/checkout">
        proceed to checkout
      </Link>
    </Wrapper>
  )
}
const Wrapper = styled.section`
display: grid;
margin-top: 2rem;
text-align: center;
article, 
.checkout-btn {
  width: 100%;
  max-width: 500px;
  justify-self: center;
}
article {
  border: 1px solid var(--primary-200); 
  border-radius: 3px;
  padding: 1rem 2rem;
  h5 {
    letter-spacing: var(--letter-spacing);
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--primary-900)
  }
  span {
    color: var(--gray-600);
  }
}
.checkout-btn {
 display: block;
 margin-top: 1rem;
 background: var(--primary-600);
 padding: .25rem 1rem;
 border-radius: var(--border-radius);
 color: var(--white);
 text-transform: capitalize;
 letter-spacing: var(--letter-spacing);
 transition: var(--transition);
 &:hover {
  background: var(--primary-400);
 }
}
@media(min-width: 800px) {
  article, 
.checkout-btn {
    justify-self: end;
  }
}
`