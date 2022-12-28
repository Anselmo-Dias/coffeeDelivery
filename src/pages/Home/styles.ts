import styled from 'styled-components'
import { WrapperContainer } from '../../styles/global'
import backgroundImg from '../../assets/background.svg'

interface DifferentsStylesBackground {
  color: 'yellow-dark' | 'yellow' | 'base-text' | 'purple'
}

const DIFFERENTS_TYPE_COLORS = {
  'yellow-dark': '#C47F17',
  yellow: '#DBAC2C',
  'base-text': '#574F4D',
  purple: '#8047F8',
} as const

export const HomeContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow-y: hidden;
`
export const Wrapper = styled(WrapperContainer)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  margin-top: 9.4rem;
  gap: 5.6rem;
`
export const RightColumn = styled.div`
  width: min(58.8rem, 100%);

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 4.8rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']};

    margin-bottom: 1.6rem;

    width: min(60rem, 100%);
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
    font-stretch: 100;
  }
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6.6rem;
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin-right: 4rem;

  div {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 130%;

      color: ${(props) => props.theme['base-text']};
    }
  }
`
export const Box = styled.div<DifferentsStylesBackground>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.8rem;
  background-color: ${(props) => DIFFERENTS_TYPE_COLORS[props.color]};
  border-radius: 999px;
  svg {
    width: 1.7rem;
  }
`
export const LeftColumn = styled.img`
  width: 40rem;
`
