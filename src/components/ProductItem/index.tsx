import Image from 'next/future/image'

import { Product, useCart } from '../../contexts/CartContext'
import { formatPrice } from '../../utils/formatPrice'
import {
  ProductInfo,
  ProductItemContainer,
  ProductImageContainer,
} from './styles'

interface ProductItemProps {
  product: Product
}

export function ProductItem({ product }: ProductItemProps) {
  const { removeproduct } = useCart()

  return (
    <ProductItemContainer>
      <ProductImageContainer>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={306}
          height={93}
        />
      </ProductImageContainer>

      <ProductInfo>
        <span>{product.name}</span>
        <strong>{formatPrice(product.price)}</strong>

        <button type={'button'} onClick={() => removeproduct(product.id)}>
          REMOVER
        </button>
      </ProductInfo>
    </ProductItemContainer>
  )
}
