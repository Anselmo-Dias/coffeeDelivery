import styled from 'styled-components'
import { WrapperContainer } from '../../../styles/global'

export const CoffesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${(props) => props.theme.white};
`
export const Wrapper = styled(WrapperContainer)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  & > strong {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 3.2rem;
    line-height: 130%;

    margin-bottom: 5.4rem;
  }
`
export const CoffesContent = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;

  gap: 4rem 9rem;

  flex-wrap: wrap;
`
