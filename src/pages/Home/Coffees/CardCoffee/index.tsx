import { useContext, useState } from 'react'
import { CardContext, CardProps } from '../../../../context/CardContext'
import {
  BoxInputsAndButtons,
  ButtonAddInCardContent,
  CardCoffeeButtonsAndPrice,
  CardCoffeeContainer,
  Decrement,
  Increment,
  TilteContainer,
  Wrapper,
} from './styles'

export function CardCoffee({
  descriptionOne,
  descriptionTwo,
  id,
  src,
  subTitle,
  title,
  value,
  titleSegundary,
  titleTertiary,
}: CardProps) {
  const { addNewItemInCard, contentCoffee, itemsInCard } =
    useContext(CardContext)
  const [amountOfCoffee, setAmountOfCoffee] = useState(1)

  const getItemCatalog = contentCoffee.find((item: CardProps) => {
    return item.subTitle === subTitle
  })

  const priceOfCoffeeAccordingToQuantity =
    Math.floor(value * amountOfCoffee) + 1

  function addItemOfCard() {
    addNewItemInCard(
      getItemCatalog,
      amountOfCoffee,
      priceOfCoffeeAccordingToQuantity,
    )
  }

  function decrementAmountCoffee() {
    setAmountOfCoffee((state: number) => {
      if (state >= 2 && state <= 9) {
        state = state - 1
      }
      return state
    })
  }

  function incrementAmountCoffee() {
    setAmountOfCoffee((state: number) => {
      if (state >= 1 && state <= 8) {
        state = state + 1
      }
      return state
    })
  }

  return (
    <CardCoffeeContainer>
      <Wrapper>
        <img src={src} alt="" />
        <TilteContainer>
          <span>{title}</span>
          {titleSegundary ? <span>{titleSegundary}</span> : null}
          {titleTertiary ? <span>{titleTertiary}</span> : null}
        </TilteContainer>
        <strong>{subTitle}</strong>
        <p>
          {descriptionOne} <br />
          {descriptionTwo}
        </p>

        <CardCoffeeButtonsAndPrice>
          <p>
            R$
            <span>{priceOfCoffeeAccordingToQuantity}</span>
          </p>
          <BoxInputsAndButtons>
            <Decrement onClick={decrementAmountCoffee}>-</Decrement>
            <input
              type="number"
              min={1}
              max={9}
              value={amountOfCoffee}
              onChange={(e) => setAmountOfCoffee(Number(e.target.value))}
              required
            />
            <Increment onClick={incrementAmountCoffee}>+</Increment>
          </BoxInputsAndButtons>
          <ButtonAddInCardContent
            disabled={itemsInCard.length === 3}
            onClick={addItemOfCard}
          >
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.25 16.5625C8.25 16.8344 8.16936 17.1003 8.01827 17.3264C7.86718 17.5525 7.65244 17.7288 7.40119 17.8328C7.14994 17.9369 6.87347 17.9641 6.60675 17.9111C6.34003 17.858 6.09503 17.7271 5.90273 17.5348C5.71043 17.3425 5.57947 17.0975 5.52642 16.8307C5.47337 16.564 5.5006 16.2876 5.60467 16.0363C5.70874 15.7851 5.88497 15.5703 6.11109 15.4192C6.33721 15.2681 6.60305 15.1875 6.875 15.1875C7.23967 15.1875 7.58941 15.3324 7.84727 15.5902C8.10513 15.8481 8.25 16.1978 8.25 16.5625ZM15.8125 15.1875C15.5406 15.1875 15.2747 15.2681 15.0486 15.4192C14.8225 15.5703 14.6462 15.7851 14.5422 16.0363C14.4381 16.2876 14.4109 16.564 14.4639 16.8307C14.517 17.0975 14.6479 17.3425 14.8402 17.5348C15.0325 17.7271 15.2775 17.858 15.5443 17.9111C15.811 17.9641 16.0874 17.9369 16.3387 17.8328C16.5899 17.7288 16.8047 17.5525 16.9558 17.3264C17.1069 17.1003 17.1875 16.8344 17.1875 16.5625C17.1875 16.1978 17.0426 15.8481 16.7848 15.5902C16.5269 15.3324 16.1772 15.1875 15.8125 15.1875ZM19.6023 3.775C19.5378 3.6901 19.4547 3.62116 19.3594 3.57348C19.264 3.5258 19.159 3.50066 19.0523 3.5H4.15078L3.45469 1.05937C3.37122 0.772642 3.19722 0.52061 2.95869 0.340934C2.72015 0.161258 2.42988 0.0635825 2.13125 0.0625H0.6875C0.505164 0.0625 0.330295 0.134933 0.201364 0.263864C0.0724328 0.392795 0 0.567664 0 0.75C0 0.932336 0.0724328 1.1072 0.201364 1.23614C0.330295 1.36507 0.505164 1.4375 0.6875 1.4375H2.13125L2.97344 4.36797V4.38516L5.24219 12.3172C5.36677 12.7476 5.62761 13.1261 5.98555 13.3957C6.34349 13.6653 6.77922 13.8116 7.22734 13.8125H15.4602C15.9083 13.8116 16.344 13.6653 16.702 13.3957C17.0599 13.1261 17.3207 12.7476 17.4453 12.3172L19.7141 4.37656C19.7431 4.27447 19.7482 4.16704 19.7288 4.06267C19.7094 3.9583 19.6661 3.85984 19.6023 3.775Z"
                fill="#F3F2F2"
              />
            </svg>
          </ButtonAddInCardContent>
        </CardCoffeeButtonsAndPrice>
      </Wrapper>
    </CardCoffeeContainer>
  )
}
