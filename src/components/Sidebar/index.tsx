import axios from 'axios'
import { destroyCookie } from 'nookies'
import { X } from 'phosphor-react'

import { ProductItem } from '../ProductItem'

import { useCart } from '../../contexts/CartContext'
import { useSidebar } from '../../contexts/SidebarContext'
import { formatPrice } from '../../utils/formatPrice'

import emptyBagIcon from '../../assets/bag.svg'

import {
  SidebarContainer,
  CloseButtonContainer,
  ProductsList,
  CheckoutInfoContainer,
  CheckoutButton,
  EmptyBagContainer,
} from './styles'
import Image from 'next/future/image'

export function Sidebar() {
  const { handleCloseSidebar, isSidebarOpen, defineIsCreatingCheckoutSession } =
    useSidebar()

  const { products, productsTotal, productsQuantity } = useCart()

  async function handleBuyProducts() {
    try {
      defineIsCreatingCheckoutSession(true)

      const productsInCart = products.map((product) => product.defaultPriceId)

      const pricesIdsWithQtd = productsInCart.map((priceId) => {
        return {
          price: priceId,
          quantity: 1,
        }
      })

      const response = await axios.post('/api/checkout', {
        pricesIdsWithQtd,
      })

      destroyCookie(undefined, '@ignite-shop:cart')

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      defineIsCreatingCheckoutSession(false)

      alert('Falha ao redirecionar para o checkout')
    }
  }

  return (
    <SidebarContainer
      animate={{
        width: isSidebarOpen ? 480 : 0,
        padding: isSidebarOpen ? '2rem' : 0,
      }}
      transition={{
        duration: 0.1,
      }}
    >
      {isSidebarOpen && (
        <>
          <CloseButtonContainer>
            <button type={'button'} onClick={handleCloseSidebar}>
              <X size={24} color="#8D8D99" />
            </button>
          </CloseButtonContainer>

          <h2>Sacola de compras</h2>

          {productsQuantity > 0 ? (
            <ProductsList>
              {products.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </ProductsList>
          ) : (
            <EmptyBagContainer>
              <Image
                src={emptyBagIcon}
                alt="empty bag"
                width={210}
                height={210}
              />

              <h3>Você ainda não adicionou nenhum produto a sacola</h3>
            </EmptyBagContainer>
          )}

          <CheckoutInfoContainer>
            <div>
              <span>Quantidade</span>
              <span>
                {productsQuantity !== 1
                  ? `${productsQuantity} camisetas`
                  : `${productsQuantity} camiseta`}
              </span>
            </div>

            <div>
              <strong className="label">Valor Total</strong>
              <strong className="price">{formatPrice(productsTotal)}</strong>
            </div>
          </CheckoutInfoContainer>

          <CheckoutButton
            onClick={handleBuyProducts}
            disabled={productsQuantity === 0}
          >
            Finalizar compra
          </CheckoutButton>
        </>
      )}
    </SidebarContainer>
  )
}
