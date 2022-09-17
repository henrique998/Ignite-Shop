import axios from 'axios'
import { X } from 'phosphor-react'
import { useCart } from '../../contexts/CartContext'

import { useSidebar } from '../../contexts/SidebarContext'
import { formatPrice } from '../../utils/formatPrice'
import { ProductItem } from '../ProductItem'

import {
  SidebarContainer,
  CloseButtonContainer,
  ProductsList,
  CheckoutInfoContainer,
  CheckoutButton,
} from './styles'

export function Sidebar() {
  const { handleCloseSidebar, isSidebarOpen, defineIsCreatingCheckoutSession } =
    useSidebar()
  const { products, productsTotal, productsQuantity } = useCart()

  async function handleBuyProducts() {
    try {
      defineIsCreatingCheckoutSession(true)

      const productsInCart = products.map((product) => product.defaultPriceId)

      const pricesIdsWithQtd = productsInCart.map((product) => {
        return {
          price: product,
          quantity: 1,
        }
      })

      const response = await axios.post('/api/checkout', {
        pricesIdsWithQtd,
      })

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

          <ProductsList>
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </ProductsList>

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

          <CheckoutButton onClick={handleBuyProducts}>
            Finalizar compra
          </CheckoutButton>
        </>
      )}
    </SidebarContainer>
  )
}
