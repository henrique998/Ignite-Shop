import Image from 'next/future/image'

import shirt from '../../assets/shirt.png'
import { ProductInfo, ProductItemContainer } from './styles'

export function ProductItem() {
  return (
    <ProductItemContainer>
      <div className="image-container">
        <Image src={shirt} alt="shirt" />
      </div>

      <ProductInfo>
        <span>Camiseta Explorer</span>
        <strong>R$ 79,90</strong>

        <button type={'button'}>REMOVER</button>
      </ProductInfo>
    </ProductItemContainer>
  )
}
