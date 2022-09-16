import { X } from 'phosphor-react'

import { useSidebar } from '../../contexts/SidebarContext'
import { ProductItem } from '../ProductItem'

import {
  SidebarContainer,
  CloseButtonContainer,
  ProductsList,
  CheckoutInfoContainer,
  CheckoutButton,
} from './styles'

export function Sidebar() {
  const { handleCloseSidebar, isSidebarOpen } = useSidebar()

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
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </ProductsList>

          <CheckoutInfoContainer>
            <div>
              <span>Quantidade</span>
              <span>3 itens</span>
            </div>

            <div>
              <strong className="label">Valor Total</strong>
              <strong className="price">R$ 270,00</strong>
            </div>
          </CheckoutInfoContainer>

          <CheckoutButton>Finalizar compra</CheckoutButton>
        </>
      )}
    </SidebarContainer>
  )
}
