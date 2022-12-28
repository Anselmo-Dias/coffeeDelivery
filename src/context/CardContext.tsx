import { createContext, ReactNode, useState } from 'react'

import coffeeNormalImg from '../../src/assets/typesCoffe/normal.svg'
import coffeeAmericanoImg from '../../src/assets/typesCoffe/Americano.svg'
import coffeeCremosoImg from '../../src/assets/typesCoffe/Expresso Cremoso.svg'
import coffeeColdImg from '../../src/assets/typesCoffe/Café Gelado.svg'
import coffeeAndMilkImg from '../../src/assets/typesCoffe/Café com Leite.svg'
import coffeeLatteImg from '../../src/assets/typesCoffe/Latte.svg'
import coffeeCapuccinoImg from '../../src/assets/typesCoffe/Capuccino.svg'
import coffeeMacchiatoImg from '../../src/assets/typesCoffe/Macchiato.svg'
import coffeeMochaccinoImg from '../../src/assets/typesCoffe/Mochaccino.svg'
import coffeeChocolateQuenteImg from '../../src/assets/typesCoffe/Chocolate Quente.svg'
import coffeeCubanoImg from '../../src/assets/typesCoffe/Cubano.svg'
import coffeeHavaianoImg from '../../src/assets/typesCoffe/Havaiano.svg'
import coffeeArabeImg from '../../src/assets/typesCoffe/Árabe.svg'
import coffeeIrlandêsImg from '../../src/assets/typesCoffe/Irlandês.svg'

export interface CardProps {
  id: string
  src: string
  value: string
  title: string
  subTitle: string
  titleSegundary?: string
  titleTertiary?: string
  descriptionOne: string
  descriptionTwo: string
}

interface CardsContextProviderProps {
  children: ReactNode
}

export const CardContext = createContext({} as any)

export function CardContextProvider({ children }: CardsContextProviderProps) {
  const [ItemsInCard, setItemsInCard] = useState<[] | {}>([])

  const contentCoffee = [
    {
      id: String(Math.random() * 10),
      src: `${coffeeNormalImg}`,
      value: '9,90',
      title: 'Tradicional',
      subTitle: 'Expresso Tradicional ',
      descriptionOne: 'O tradicional café feito com água ',
      descriptionTwo: 'quente e grãos moídos',
    },
    {
      id: String(Math.random() * 10),
      src: `${coffeeAmericanoImg}`,
      value: '9,90',
      title: 'Tradicional',
      subTitle: 'Expresso Americano',
      descriptionOne: 'Expresso diluído, menos intenso',
      descriptionTwo: 'que o tradicional',
    },
    {
      id: String(Math.random() * 10),
      src: `${coffeeCremosoImg}`,
      value: '9,90',
      title: 'Tradicional',
      subTitle: 'Expresso Cremoso',
      descriptionOne: 'Café expresso tradicional com',
      descriptionTwo: 'espuma cremosa',
    },
    {
      id: String(Math.random() * 10),
      src: `${coffeeColdImg}`,
      value: '9,90',
      title: 'Tradicional',
      titleSegundary: 'gelado',
      subTitle: 'Expresso Gelado',
      descriptionOne: 'Bebida preparada com café',
      descriptionTwo: 'expresso e cubos de gelo',
    },
    {
      id: String(Math.random() * 10),
      src: `${coffeeAndMilkImg}`,
      value: '9,90',
      title: 'Tradicional',
      titleSegundary: 'com leite',
      subTitle: 'Café com Leite',
      descriptionOne: 'Meio a meio de expresso ',
      descriptionTwo: 'tradicional com leite vaporizado',
    },
    {
      id: String(Math.random() * 10),
      src: `${coffeeLatteImg}`,
      value: '9,90',
      title: 'Tradicional',
      titleSegundary: 'com leite',
      subTitle: 'Latte',
      descriptionOne: 'Uma dose de café expresso com o',
      descriptionTwo: 'dobro de leite e espuma cremosa',
    },
    {
      id: String(Math.random() * 10),
      src: `${coffeeCapuccinoImg}`,
      value: '9,90',
      title: 'Tradicional',
      titleSegundary: 'com leite',
      subTitle: 'Capuccino',
      descriptionOne: 'Bebida com canela feita de doses',
      descriptionTwo: 'iguais de café, leite e espuma',
    },
    {
      id: String(Math.random() * 10),
      src: `${coffeeMacchiatoImg}`,
      value: '9,90',
      title: 'Tradicional',
      titleSegundary: 'com leite',
      subTitle: 'Macchiato',
      descriptionOne: 'Café expresso misturado com um ',
      descriptionTwo: 'pouco de leite quente e espuma',
    },
    {
      id: String(Math.random() * 10),
      src: `${coffeeMochaccinoImg}`,
      value: '9,90',
      title: 'Tradicional',
      titleSegundary: 'com leite',
      subTitle: 'Mocaccino',
      descriptionOne: 'Café expresso com calda de',
      descriptionTwo: 'chocolate, pouco leite e espuma',
    },
    {
      id: String(Math.random() * 10),
      src: `${coffeeChocolateQuenteImg}`,
      value: '9,90',
      title: 'Tradicional',
      titleSegundary: 'com leite',
      subTitle: 'Chocolate Quente',
      descriptionOne: 'Bebida feita com chocolate',
      descriptionTwo: 'dissolvido no leite quente e café ',
    },
    {
      id: String(Math.random() * 10),
      src: `${coffeeCubanoImg}`,
      value: '9,90',
      title: 'especial',
      titleSegundary: 'alcoólico',
      titleTertiary: 'gelado',
      subTitle: 'Cubano',
      descriptionOne: 'Drink gelado de café expresso ',
      descriptionTwo: 'com rum, creme de leite e hortelã',
    },
    {
      id: String(Math.random() * 10),
      src: `${coffeeHavaianoImg}`,
      value: '9,90',
      title: 'especial',
      subTitle: 'Havaiano',
      descriptionOne: 'Bebida adocicada preparada com',
      descriptionTwo: 'café e leite de coco',
    },
    {
      id: String(Math.random() * 10),
      src: `${coffeeArabeImg}`,
      value: '9,90',
      title: 'especial',
      subTitle: 'Árabe',
      descriptionOne: 'Bebida preparada com grãos de',
      descriptionTwo: 'café árabe e especiarias',
    },
    {
      id: String(Math.random() * 10),
      src: `${coffeeIrlandêsImg}`,
      value: '9,90',
      title: 'especial',
      titleSegundary: 'alcoólico',
      subTitle: 'Irlandês',
      descriptionOne: 'Bebida a base de café, uísque ',
      descriptionTwo: 'irlandês, açúcar e chantilly',
    },
  ]

  function addNewItemInCard(item: CardProps[]) {
    setItemsInCard((state) => [...state, item])
  }

  return (
    <CardContext.Provider
      value={{ addNewItemInCard, contentCoffee, ItemsInCard, setItemsInCard }}
    >
      {children}
    </CardContext.Provider>
  )
}