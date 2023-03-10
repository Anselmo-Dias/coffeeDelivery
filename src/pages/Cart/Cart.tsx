import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { CardContext, CardProps } from '../../context/CardContext'
import { ItemOfShoppingCart } from './ItemOfShoppingCart'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import {
  BoxButtonsOfPayment,
  CartContainer,
  FormContainer,
  FormHeaderContainer,
  FormOfPaymentContainer,
  ItemsInCardAndConfirmRequest,
  PriceAndButtonOfConfirmRequest,
  WarningContent,
  Wrapper,
} from './styles'
import { NavLink } from 'react-router-dom'

const formValidationSchema = zod.object({
  zidCode: zod.number().min(8, 'a quantidade mínima é 8 caracteres'),
  street: zod.string().min(2, 'a quantidade mínima é 8 caracteres'),
  numberHouse: zod.number().min(1, 'a quantidade mínima é 1 caracteres'),
  complement: zod
    .string()
    .min(1, 'a quantidade mínima é 1 caracteres')
    .max(25, 'a quantidade máxima é 25 caracteres'),
  district: zod
    .string()
    .min(1, 'a quantidade mínima é 1 caracteres')
    .max(7, 'a quantidade máxima é 7 caracteres'),
  city: zod
    .string()
    .min(1, 'a quantidade mínima é 1 caracteres')
    .max(25, 'a quantidade máxima é 25 caracteres'),
  uf: zod
    .string()
    .min(2, 'a quantidade mínima é 2 caracteres')
    .max(2, 'a quantidade máxima é 2 caracteres'),
})

type typeFormDataProps = zod.infer<typeof formValidationSchema>

export function Cart() {
  const { register, handleSubmit, reset, watch } = useForm<typeFormDataProps>({
    resolver: zodResolver(formValidationSchema),
  })
  const {
    itemsInCard,
    setInforFormUser,
    setFormPayment,
    inforFormUser,
    formPayment,
  } = useContext(CardContext)

  const totalItems = itemsInCard.reduce(function (
    acumulador: number,
    { value }: CardProps,
  ) {
    return acumulador + value
  },
  0)

  const resultFinaly = totalItems + 3.5

  function handleSavedInforOfUser(data: typeFormDataProps) {
    setInforFormUser(data)
    console.log(data)
    reset()
  }

  function formPaymentInCredit() {
    setFormPayment('Cartão de crédito')
  }
  function formPaymentInDebt() {
    setFormPayment('cartão de débito')
  }
  function formPaymentInCash() {
    setFormPayment('dinheiro')
  }

  const uf = watch('uf')
  const isSubmitDisabled = !uf || !formPayment

  return (
    <CartContainer>
      <Wrapper>
        <FormContainer>
          <strong>Complete seu pedido</strong>

          <div>
            <FormHeaderContainer>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.125 19.9375C4.125 19.5578 4.4328 19.25 4.8125 19.25H17.1875C17.5672 19.25 17.875 19.5578 17.875 19.9375C17.875 20.3172 17.5672 20.625 17.1875 20.625H4.8125C4.4328 20.625 4.125 20.3172 4.125 19.9375Z"
                  fill="#C47F17"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11 6.875C9.86091 6.875 8.9375 7.79841 8.9375 8.9375C8.9375 10.0766 9.86091 11 11 11C12.1391 11 13.0625 10.0766 13.0625 8.9375C13.0625 7.79841 12.1391 6.875 11 6.875ZM7.5625 8.9375C7.5625 7.03902 9.10152 5.5 11 5.5C12.8985 5.5 14.4375 7.03902 14.4375 8.9375C14.4375 10.836 12.8985 12.375 11 12.375C9.10152 12.375 7.5625 10.836 7.5625 8.9375Z"
                  fill="#C47F17"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11 2.75C9.35897 2.75 7.78516 3.4019 6.62478 4.56228C5.4644 5.72266 4.8125 7.29647 4.8125 8.9375C4.8125 11.7837 6.4019 14.3754 8.08129 16.3067C8.91259 17.2627 9.74566 18.0335 10.371 18.565C10.6184 18.7753 10.8324 18.9474 11 19.0781C11.1676 18.9474 11.3816 18.7753 11.629 18.565C12.2543 18.0335 13.0874 17.2627 13.9187 16.3067C15.5981 14.3754 17.1875 11.7837 17.1875 8.9375C17.1875 7.29647 16.5356 5.72266 15.3752 4.56228C14.2148 3.4019 12.641 2.75 11 2.75ZM11 19.9375C10.6057 20.5007 10.6056 20.5006 10.6053 20.5004L10.6048 20.5L10.6032 20.4989L10.5981 20.4953L10.5806 20.4829C10.5657 20.4723 10.5445 20.457 10.5174 20.4372C10.4632 20.3977 10.3853 20.3399 10.2871 20.2649C10.0908 20.1148 9.81284 19.8952 9.48052 19.6127C8.81684 19.0486 7.93116 18.2295 7.04371 17.2089C5.28561 15.1871 3.4375 12.2788 3.4375 8.9375C3.4375 6.9318 4.23426 5.00825 5.6525 3.59C7.07075 2.17176 8.9943 1.375 11 1.375C13.0057 1.375 14.9293 2.17176 16.3475 3.59C17.7657 5.00825 18.5625 6.9318 18.5625 8.9375C18.5625 12.2788 16.7144 15.1871 14.9563 17.2089C14.0688 18.2295 13.1832 19.0486 12.5195 19.6127C12.1872 19.8952 11.9092 20.1148 11.7129 20.2649C11.6147 20.3399 11.5368 20.3977 11.4826 20.4372C11.4555 20.457 11.4343 20.4723 11.4194 20.4829L11.4019 20.4953L11.3968 20.4989L11.3952 20.5L11.3947 20.5004C11.3944 20.5006 11.3943 20.5007 11 19.9375ZM11 19.9375L11.3943 20.5007C11.1575 20.6664 10.8425 20.6664 10.6057 20.5007L11 19.9375Z"
                  fill="#C47F17"
                />
              </svg>
              <div>
                <strong>Endereço de Entrega</strong>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </FormHeaderContainer>

            <form
              onSubmit={handleSubmit(handleSavedInforOfUser)}
              method="POST"
              id="address"
            >
              <input
                id="zidCode"
                type="text"
                minLength={8}
                maxLength={8}
                placeholder="Cep 00000-000"
                required
                {...register('zidCode', { valueAsNumber: true })}
              />
              <input
                id="street"
                type="text"
                maxLength={100}
                minLength={8}
                placeholder="Rua"
                required
                {...register('street')}
              />
              <div>
                <div>
                  <input
                    type="text"
                    placeholder="Número da casa"
                    minLength={1}
                    maxLength={4}
                    required
                    {...register('numberHouse', { valueAsNumber: true })}
                  />
                  <input
                    type="text"
                    placeholder="Complemento"
                    maxLength={50}
                    {...register('complement')}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Bairro"
                    maxLength={15}
                    required
                    {...register('district')}
                  />
                  <input
                    type="text"
                    placeholder="Cidade"
                    maxLength={70}
                    minLength={5}
                    required
                    {...register('city')}
                  />
                  <input
                    type="text"
                    placeholder="UF"
                    maxLength={2}
                    minLength={2}
                    required
                    {...register('uf')}
                  />
                </div>
              </div>
            </form>
          </div>
          <FormOfPaymentContainer>
            <FormHeaderContainer>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11 1.375C11.3797 1.375 11.6875 1.6828 11.6875 2.0625V19.9375C11.6875 20.3172 11.3797 20.625 11 20.625C10.6203 20.625 10.3125 20.3172 10.3125 19.9375V2.0625C10.3125 1.6828 10.6203 1.375 11 1.375Z"
                  fill="#8047F8"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.36443 4.64568C7.13802 3.8721 8.18723 3.4375 9.28125 3.4375H12.375C12.9167 3.4375 13.4531 3.5442 13.9536 3.7515C14.454 3.9588 14.9088 4.26264 15.2918 4.64568C15.6749 5.02873 15.9787 5.48346 16.186 5.98393C16.3933 6.4844 16.5 7.0208 16.5 7.5625C16.5 7.9422 16.1922 8.25 15.8125 8.25C15.4328 8.25 15.125 7.9422 15.125 7.5625C15.125 7.20136 15.0539 6.84377 14.9157 6.51012C14.7775 6.17648 14.5749 5.87332 14.3195 5.61796C14.0642 5.3626 13.761 5.16003 13.4274 5.02183C13.0937 4.88363 12.7361 4.8125 12.375 4.8125H9.28125C8.5519 4.8125 7.85243 5.10223 7.33671 5.61796C6.82098 6.13368 6.53125 6.83315 6.53125 7.5625C6.53125 8.29185 6.82098 8.99132 7.33671 9.50704C7.85243 10.0228 8.5519 10.3125 9.28125 10.3125H13.0625C14.1565 10.3125 15.2057 10.7471 15.9793 11.5207C16.7529 12.2943 17.1875 13.3435 17.1875 14.4375C17.1875 15.5315 16.7529 16.5807 15.9793 17.3543C15.2057 18.1279 14.1565 18.5625 13.0625 18.5625H8.9375C7.84348 18.5625 6.79427 18.1279 6.02068 17.3543C5.2471 16.5807 4.8125 15.5315 4.8125 14.4375C4.8125 14.0578 5.1203 13.75 5.5 13.75C5.8797 13.75 6.1875 14.0578 6.1875 14.4375C6.1875 15.1668 6.47723 15.8663 6.99296 16.382C7.50868 16.8978 8.20815 17.1875 8.9375 17.1875H13.0625C13.7918 17.1875 14.4913 16.8978 15.007 16.382C15.5228 15.8663 15.8125 15.1668 15.8125 14.4375C15.8125 13.7082 15.5228 13.0087 15.007 12.493C14.4913 11.9772 13.7918 11.6875 13.0625 11.6875H9.28125C8.18723 11.6875 7.13802 11.2529 6.36443 10.4793C5.59085 9.70573 5.15625 8.65652 5.15625 7.5625C5.15625 6.46848 5.59085 5.41927 6.36443 4.64568Z"
                  fill="#8047F8"
                />
              </svg>

              <div>
                <strong>Pagamento</strong>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </FormHeaderContainer>

            <BoxButtonsOfPayment>
              <button onClick={formPaymentInCredit}>
                {' '}
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1 4.5C1 3.94772 1.44772 3.5 2 3.5H14C14.5523 3.5 15 3.94772 15 4.5V12.5C15 13.0523 14.5523 13.5 14 13.5H2C1.44772 13.5 1 13.0523 1 12.5V4.5ZM14 4.5H2V12.5H14V4.5Z"
                    fill="#8047F8"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 11C10 10.7239 10.2239 10.5 10.5 10.5H12.5C12.7761 10.5 13 10.7239 13 11C13 11.2761 12.7761 11.5 12.5 11.5H10.5C10.2239 11.5 10 11.2761 10 11Z"
                    fill="#8047F8"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 11C7 10.7239 7.22386 10.5 7.5 10.5H8.5C8.77614 10.5 9 10.7239 9 11C9 11.2761 8.77614 11.5 8.5 11.5H7.5C7.22386 11.5 7 11.2761 7 11Z"
                    fill="#8047F8"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1 6.55627C1 6.28013 1.22386 6.05627 1.5 6.05627H14.5C14.7761 6.05627 15 6.28013 15 6.55627C15 6.83242 14.7761 7.05627 14.5 7.05627H1.5C1.22386 7.05627 1 6.83242 1 6.55627Z"
                    fill="#8047F8"
                  />
                </svg>
                Cartão de crédito
              </button>
              <button onClick={formPaymentInDebt}>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_8160_101)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.40462 2.07417C8.56532 1.97528 8.76801 1.97528 8.92872 2.07417L15.4287 6.07417C15.6192 6.19141 15.7087 6.42093 15.6478 6.63617C15.5868 6.85141 15.3904 7 15.1667 7H2.16667C1.94297 7 1.74649 6.85141 1.68557 6.63617C1.62465 6.42093 1.71411 6.19141 1.90462 6.07417L8.40462 2.07417ZM3.93319 6H13.4001L8.66667 3.08709L3.93319 6Z"
                      fill="#8047F8"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.16669 6C4.44283 6 4.66669 6.22386 4.66669 6.5V11.5C4.66669 11.7761 4.44283 12 4.16669 12C3.89054 12 3.66669 11.7761 3.66669 11.5V6.5C3.66669 6.22386 3.89054 6 4.16669 6Z"
                      fill="#8047F8"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.16669 6C7.44283 6 7.66669 6.22386 7.66669 6.5V11.5C7.66669 11.7761 7.44283 12 7.16669 12C6.89054 12 6.66669 11.7761 6.66669 11.5V6.5C6.66669 6.22386 6.89054 6 7.16669 6Z"
                      fill="#8047F8"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.1667 6C10.4428 6 10.6667 6.22386 10.6667 6.5V11.5C10.6667 11.7761 10.4428 12 10.1667 12C9.89054 12 9.66669 11.7761 9.66669 11.5V6.5C9.66669 6.22386 9.89054 6 10.1667 6Z"
                      fill="#8047F8"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.1667 6C13.4428 6 13.6667 6.22386 13.6667 6.5V11.5C13.6667 11.7761 13.4428 12 13.1667 12C12.8905 12 12.6667 11.7761 12.6667 11.5V6.5C12.6667 6.22386 12.8905 6 13.1667 6Z"
                      fill="#8047F8"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.16669 11.5C2.16669 11.2239 2.39054 11 2.66669 11H14.6667C14.9428 11 15.1667 11.2239 15.1667 11.5C15.1667 11.7761 14.9428 12 14.6667 12H2.66669C2.39054 12 2.16669 11.7761 2.16669 11.5Z"
                      fill="#8047F8"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.16669 13.5C1.16669 13.2239 1.39054 13 1.66669 13H15.6667C15.9428 13 16.1667 13.2239 16.1667 13.5C16.1667 13.7761 15.9428 14 15.6667 14H1.66669C1.39054 14 1.16669 13.7761 1.16669 13.5Z"
                      fill="#8047F8"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_8160_101">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0.666687 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                cartão de débito
              </button>
              <button onClick={formPaymentInCash}>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_8160_110)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.833374 5C0.833374 4.44772 1.28109 4 1.83337 4H14.8334C15.3857 4 15.8334 4.44772 15.8334 5V12C15.8334 12.5523 15.3857 13 14.8334 13H1.83337C1.28109 13 0.833374 12.5523 0.833374 12V5ZM14.8334 5H1.83337V12H14.8334V5Z"
                      fill="#8047F8"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.33337 7C7.50495 7 6.83337 7.67157 6.83337 8.5C6.83337 9.32843 7.50495 10 8.33337 10C9.1618 10 9.83337 9.32843 9.83337 8.5C9.83337 7.67157 9.1618 7 8.33337 7ZM5.83337 8.5C5.83337 7.11929 6.95266 6 8.33337 6C9.71409 6 10.8334 7.11929 10.8334 8.5C10.8334 9.88071 9.71409 11 8.33337 11C6.95266 11 5.83337 9.88071 5.83337 8.5Z"
                      fill="#8047F8"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.9571 4.17075C11.1389 3.96294 11.4548 3.94188 11.6626 4.12372L15.6626 7.62372C15.8705 7.80556 15.8915 8.12144 15.7097 8.32926C15.5278 8.53708 15.2119 8.55814 15.0041 8.37629L11.0041 4.8763C10.7963 4.69445 10.7753 4.37857 10.9571 4.17075Z"
                      fill="#8047F8"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.7097 8.67075C15.8915 8.87857 15.8705 9.19445 15.6626 9.3763L11.6626 12.8763C11.4548 13.0581 11.1389 13.0371 10.9571 12.8293C10.7753 12.6214 10.7963 12.3056 11.0041 12.1237L15.0041 8.62372C15.2119 8.44188 15.5278 8.46294 15.7097 8.67075Z"
                      fill="#8047F8"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.70967 4.17075C5.89151 4.37857 5.87045 4.69445 5.66263 4.8763L1.66263 8.37629C1.45481 8.55814 1.13893 8.53708 0.957093 8.32926C0.775252 8.12144 0.79631 7.80556 1.00413 7.62372L5.00413 4.12372C5.21195 3.94188 5.52783 3.96294 5.70967 4.17075Z"
                      fill="#8047F8"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.957093 8.67075C1.13893 8.46294 1.45481 8.44188 1.66263 8.62372L5.66263 12.1237C5.87045 12.3056 5.89151 12.6214 5.70967 12.8293C5.52783 13.0371 5.21195 13.0581 5.00413 12.8763L1.00413 9.3763C0.79631 9.19445 0.775252 8.87857 0.957093 8.67075Z"
                      fill="#574F4D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_8160_110">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0.333374 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                dinheiro
              </button>
            </BoxButtonsOfPayment>
          </FormOfPaymentContainer>
        </FormContainer>
        {itemsInCard.length > 0 ? (
          <ItemsInCardAndConfirmRequest>
            {itemsInCard.map((item: CardProps) => {
              return (
                <ItemOfShoppingCart
                  key={item.id}
                  id={item.id}
                  subTitle={item.subTitle}
                  src={item.src}
                  value={item.value}
                  amount={item.amount}
                />
              )
            })}
            <PriceAndButtonOfConfirmRequest>
              <div>
                <p>Total de itens</p>
                <span>R$ {totalItems.toFixed(2)} </span>
              </div>
              <div>
                <p>Entrega</p>
                <span>R$ 3.50</span>
              </div>
              <div>
                <p>Total</p>
                <span>R$ {resultFinaly.toFixed(2)}</span>
              </div>

              <button disabled={isSubmitDisabled} type="submit" form="address">
                {isSubmitDisabled
                  ? 'Preencha os campos'
                  : 'Confirme seu pedido'}
              </button>
              {inforFormUser?.district && (
                <NavLink to="/end">Ver prazo</NavLink>
              )}
            </PriceAndButtonOfConfirmRequest>
          </ItemsInCardAndConfirmRequest>
        ) : (
          <WarningContent>
            <strong>Carinho Vazio</strong>
          </WarningContent>
        )}
      </Wrapper>
    </CartContainer>
  )
}
