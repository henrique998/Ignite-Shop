import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/future/image'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Stripe from 'stripe'
import { Header } from '../../components/Header'
import { LoadingHeader } from '../../components/shimmer/LoadingHeader'
import { LoadingProductInfo } from '../../components/shimmer/LoadingProductInfo'
import { useCart } from '../../contexts/CartContext'
import { useShimmerEffect } from '../../contexts/ShimmerContext'
import { useSidebar } from '../../contexts/SidebarContext'
import { stripe } from '../../lib/stripe'

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product'
import { formatPrice } from '../../utils/formatPrice'

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: number
    description: string
    // defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const { isLoading } = useShimmerEffect()
  const { addProductToCart } = useCart()
  const { isCreatingCheckoutSession } = useSidebar()

  const { isFallback } = useRouter()

  if (isFallback) {
    return <p>loading...</p>
  }

  if (isLoading) {
    return (
      <>
        <LoadingHeader />

        <LoadingProductInfo />
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <Header />

      <ProductContainer>
        <ImageContainer>
          <Image src={product?.imageUrl} alt="" width={520} height={480} />
        </ImageContainer>

        <ProductDetails>
          <h1>{product?.name}</h1>
          <span>{formatPrice(product?.price)}</span>

          <p>{product?.description}</p>

          <button
            onClick={() => addProductToCart(product)}
            disabled={isCreatingCheckoutSession}
          >
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_MOkZy1x71zZYMc' } }],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount,
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
