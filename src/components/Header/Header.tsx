import { HeaderContainer, Navigation, Wrapper } from './styles'
import Img from '../../assets/Logo.svg'
import pinImg from '../../assets/icons/map-pin-fill.svg'
import cartImg from '../../assets/icons/shopping-cart-fill.svg'
import { CardContext } from '../../context/CardContext'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
// import { Cart } from '../../pages/Cart/Cart'

export function Header() {
  const { itemsInCard } = useContext(CardContext)
  return (
    <HeaderContainer>
      <Wrapper>
        <img src={Img} alt="" />

        <Navigation>
          <div>
            <img src={pinImg} alt="" />
            <p>Areia Branca, SE</p>
          </div>

          <NavLink to="/cart">
            <img src={cartImg} alt="" />
            <span>{itemsInCard.length}</span>
          </NavLink>
        </Navigation>
      </Wrapper>
    </HeaderContainer>
  )
}
