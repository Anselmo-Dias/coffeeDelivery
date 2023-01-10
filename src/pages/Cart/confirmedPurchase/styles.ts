import styled from 'styled-components'
import { WrapperContainer } from '../../../styles/global'

export const ConfirmedPurchaseContainer = styled.div``
export const Wrapper = styled(WrapperContainer)`
  /* width: min(107rem, 100%);
  margin-inline: auto;
  padding-inline: 1rem; */

  margin-top: 8rem;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`
export const Content = styled.div`
  strong {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 3.2rem;
    line-height: 130%;

    color: ${(props) => props.theme['yellow-dark']};
  }

  & > p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
    font-stretch: 100;

    margin-bottom: 4rem;
  }
`
export const BoxInfor = styled.div`
  width: 100%;

  padding: 4rem;

  border: 3px solid transparent;
  border-image: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  border-image-slice: 1;
  border-radius: 6px 36px;
`
export const ItemsInBox = styled.div``

export const Item = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  justify-content: flex-start;

  & + & {
    margin-top: 3rem;
  }

  div {
    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 130%;

      color: ${(props) => props.theme['base-text']};

      span {
        font-weight: bold;
      }
    }
  }
`
