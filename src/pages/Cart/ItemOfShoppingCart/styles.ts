import styled from 'styled-components'

export const ItemsOfCard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  /* flex-direction: column; */

  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  padding-bottom: 2.4rem;

  & + & {
    padding-top: 2.4rem;
  }

  img {
    width: 6.4rem;
    margin-right: 2rem;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;

    gap: 0.8rem;
    margin-right: 5rem;

    & > div {
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 0.8rem;
    }
  }
`

export const ButtonRemove = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.4rem;

  border-radius: 6px;
  border: none;

  padding: 0.8rem;

  background-color: ${(props) => props.theme['base-button']};

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 160%;

  text-transform: uppercase;

  color: ${(props) => props.theme['base-text']};

  transition: background 0.1s;

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`
