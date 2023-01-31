import { useState } from 'react'

export function useShoppingCart() {
  const [amountOfCoffee, setAmountOfCoffee] = useState(1)

  const priceOfCoffeeAccordingToQuantity = Math.floor(9.9 * amountOfCoffee) + 1

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

  return {
    priceOfCoffeeAccordingToQuantity,
    decrementAmountCoffee,
    incrementAmountCoffee,
    amountOfCoffee,
    setAmountOfCoffee,
  }
}
