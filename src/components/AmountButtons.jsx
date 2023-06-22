import styled from "styled-components"
import {HiOutlinePlus, HiMinus} from "react-icons/hi"
const AmountButtons = ({increase, decrease, amount}) => {
  return (
    <Wrapper>
        <button onClick={decrease}>
            <HiMinus /> 
        </button>
        <h2>{amount}</h2>
        <button onClick={increase}>
            <HiOutlinePlus />
        </button>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    width: 100px;
    margin-top: .5rem;
    color: var(--gray-800);
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
        border-color: transparent;
        background: transparent;
        cursor: pointer;
        svg {
            color: var(--gray-700);
            font-size: 1.25rem;
        }
    }
    h2 {
        margin: 0;
    }
`
export default AmountButtons