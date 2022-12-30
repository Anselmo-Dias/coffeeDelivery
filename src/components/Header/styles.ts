import styled from 'styled-components'
import { WrapperContainer } from '../../styles/global'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.background};
`
export const Wrapper = styled(WrapperContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 3.2rem;
`

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;

    padding: 0.8rem;

    border-radius: 6px;

    background-color: ${(props) => props.theme['purple-light']};

    img {
      color: ${(props) => props.theme.purple};
    }

    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 130%;

      color: ${(props) => props.theme['purple-dark']};
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme['yellow-light']};
    padding: 0.8rem;
    border-radius: 6px;

    position: relative;

    img {
      width: 18.56px;
      color: ${(props) => props.theme['yellow-light']};
    }

    span {
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;

      background: ${(props) => props.theme['yellow-dark']};
      color: ${(props) => props.theme.white};

      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 1.2rem;
      line-height: 130%;
      letter-spacing: -0.06em;

      border-radius: 1000px;

      position: absolute;
      width: 20px;
      height: 20px;
      right: -8.35px;
      top: -8px;

      /* padding: 0.8rem 0.8rem; */
    }
  }
`
