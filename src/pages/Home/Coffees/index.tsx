import { CardCoffee } from './CardCoffee'
import { CoffesContainer, CoffesContent, Wrapper } from './styles'

import { useContext } from 'react'
import { CardContext, CardProps } from '../../../context/CardContext'

export function Coffes() {
  const { contentCoffee } = useContext(CardContext)

  return (
    <CoffesContainer>
      <Wrapper>
        <strong>Nossos cafés</strong>
        <CoffesContent>
          {contentCoffee.map((item: CardProps) => {
            return (
              <CardCoffee
                key={item.id}
                id={item.id}
                src={item.src}
                value={item.value}
                title={item.title}
                titleSegundary={item.titleSegundary}
                titleTertiary={item.titleTertiary}
                subTitle={item.subTitle}
                descriptionOne={item.descriptionOne}
                descriptionTwo={item.descriptionTwo}
                amount={item.amount}
              />
            )
          })}
        </CoffesContent>
      </Wrapper>
    </CoffesContainer>
  )
}
