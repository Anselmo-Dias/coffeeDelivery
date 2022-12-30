import styled from 'styled-components'
import { WrapperContainer } from '../../../../styles/global'

export const CardCoffeeContainer = styled.div``
export const Wrapper = styled(WrapperContainer)`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;

  margin-bottom: 0.8rem;
  background-color: ${(props) => props.theme['base-card']};

  border-radius: 6px 36px;
  padding: 1rem;

  img {
    width: 12rem;
    transform: translateY(-2rem);
  }

  strong {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};

    margin-bottom: 0.8rem;
  }

  & > p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-label']};

    margin-bottom: 3.3rem;

    word-wrap: break-word;
  }
`

export const TilteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.4rem;
  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 130%;

    text-transform: uppercase;

    border-radius: 100px;

    padding: 0.4rem 0.8rem;

    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    margin-bottom: 1.6rem;
  }
`
export const CardCoffeeButtonsAndPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 1rem 1rem 1rem;

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-text']};

    margin-right: 2.3rem;

    span {
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 800;
      font-size: 2.4rem;
      line-height: 130%;
      padding-left: 0.5rem;

      color: ${(props) => props.theme['base-text']};
    }
  }
`
export const BoxInputsAndButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 3rem;
    background-color: ${(props) => props.theme['base-button']};

    border: none;
    padding: 0.71rem 0.8rem;

    outline: none;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']};
    -moz-appearance: textfield;
    appearance: textfield;
  }

  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  margin-right: 0.8rem;
`
export const Decrement = styled.button`
  padding: 1rem;
  border: none;
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme.purple};

  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;

  outline: none;
`
export const Increment = styled.button`
  padding: 1rem;
  border: none;
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme.purple};

  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;

  outline: none;
`
export const ButtonAddInCardContent = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;

  background: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;

  border: none;

  transition: background 0.1s;

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme.purple};
  }

  &:disabled {
    cursor: not-allowed;
  }
`
