import styled from 'styled-components'
import { WrapperContainer } from '../../styles/global'

export const CartContainer = styled.section`
  background-color: ${(props) => props.theme.white};
`
export const Wrapper = styled(WrapperContainer)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  gap: 3.2rem;

  margin-top: 4rem;
  padding-bottom: 1rem;
`

export const WarningContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30rem;

  background-color: ${(props) => props.theme['base-card']};
  transform: translateY(3.8rem);

  padding: 2rem;

  border-radius: 6px;

  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
`

export const FormContainer = styled.div`
  & > strong {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;

    border-radius: 6px;

    gap: 3.2rem;

    background-color: ${(props) => props.theme['base-card']};
    margin-top: 1.5rem;
    padding: 4rem;

    form {
      display: flex;
      flex-direction: column;

      gap: 1.6rem;

      & input:nth-child(1) {
        width: min(20rem, 100%);
      }

      & input:nth-child(2) {
        width: min(56rem, 100%);
      }

      & > div {
        display: flex;
        flex-direction: column;
        gap: 1.6rem;

        div {
          display: flex;
          gap: 1.6rem;
        }
      }

      div div:nth-child(1) {
        input:first-child {
          width: min(20rem, 100%);
        }

        input:last-child {
          width: min(34.8rem, 100%);
        }
      }
      div div:nth-child(2) {
        input:first-child {
          width: min(20rem, 100%);
        }

        input:last-child {
          width: min(27.6rem, 100%);
        }

        & input:nth-child(3) {
          width: min(6rem, 100%);
        }
      }

      input {
        height: 4.2rem;

        padding: 1.2rem;
        gap: 0.4rem;

        background: ${(props) => props.theme['base-input']};

        border: 1px solid ${(props) => props.theme['base-button']};
        border-radius: 4px;

        &:focus,
        &:valid {
          outline: 1px solid ${(props) => props.theme['yellow-dark']};
        }
      }
    }
  }
`
export const FormHeaderContainer = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.8rem;

  div {
    strong {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 130%;

      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 130%;

      color: ${(props) => props.theme['base-text']};
    }
  }
`
export const FormOfPaymentContainer = styled.div`
  button {
    border: 1px solid transparent;
  }
  button:focus {
    background-color: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme.purple};
    outline: 1px solid ${(props) => props.theme.purple};
  }
`
export const BoxButtonsOfPayment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1.2rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.3rem;

    padding: 1.6rem;
    background-color: ${(props) => props.theme['base-button']};

    border: none;
    border-radius: 6px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 160%;

    text-transform: uppercase;

    color: ${(props) => props.theme['base-text']};
  }
`

export const ItemsInCardAndConfirmRequest = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: ${(props) => props.theme['base-card']};
  padding: 4rem;
  margin-top: calc(4rem - 0.11rem);

  border-radius: 6px 44px;
`

export const PriceAndButtonOfConfirmRequest = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  gap: 1.2rem;

  padding-top: 2.4rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  & div:nth-child(1),
  & div:nth-child(2) {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-text']};

    span {
      font-size: 1.6rem;
      line-height: 130%;
    }
  }

  & div:nth-child(3) {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']};
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.2rem 0.8rem;
    gap: 4px;

    width: min(36.8rem, 100%);
    height: 4.6rem;

    background: ${(props) => props.theme.yellow};
    border-radius: 6px;

    border: none;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 160%;

    text-transform: uppercase;

    color: #ffffff;
    font-stretch: 100;
    transition: background 0.1s;

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme['yellow-dark']};
    }

    &:disabled {
      cursor: not-allowed;
    }

    &:disabled {
      cursor: not-allowed;
      /* pointer-events: none; */
    }
  }
`
