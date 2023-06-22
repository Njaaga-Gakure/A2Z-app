import styled from "styled-components"

const CartColumns = () => {
  return (
    <Wrapper>
      <div className="container">
        <h5>item</h5>
        <h5>price</h5>
        <h5>quantity</h5>
        <h5>subtotal</h5>
        <span></span>
      </div>
      <hr/>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: none;
  @media(min-width: 800px) {
    display: block;
    .container {
      h5 {
        color: var(--gray-700);
        letter-spacing: var(--letter-spacing);
      }
      display: grid;
      grid-template-columns: 300px 1fr 1fr 1fr auto;
    }
  }
`
export default CartColumns