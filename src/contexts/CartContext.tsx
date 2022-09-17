import produce from 'immer'
import { createContext, ReactNode, useContext, useState } from 'react'

export type Product = {
  id: string
  name: string
  imageUrl: string
  price: number
  defaultPriceId: string
}

type CartContextData = {
  products: Product[]
  productsQuantity: number
  productsTotal: number
  addProductToCart: (product: Product) => void
  removeproduct: (productId: string) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextData)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [products, setProducts] = useState<Product[]>([])

  const productsQuantity = products.length

  const productsTotal = products.reduce((prevValue, product) => {
    return prevValue + product.price
  }, 0)

  function addProductToCart(product: Product) {
    const productIndex = products.findIndex((item) => item.id === product.id)

    const productCart = produce(products, (draft) => {
      if (productIndex < 0) {
        draft.push(product)
      }
    })

    setProducts(productCart)
  }

  function removeproduct(productId: string) {
    const productIndex = products.findIndex(
      (product) => product.id === productId,
    )

    const filteredProducts = produce(products, (draft) => {
      if (productIndex >= 0) {
        draft.splice(productIndex, 1)
      }
    })

    setProducts(filteredProducts)
  }

  return (
    <CartContext.Provider
      value={{
        products,
        addProductToCart,
        removeproduct,
        productsTotal,
        productsQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
