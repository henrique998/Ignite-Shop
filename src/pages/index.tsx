import { useState } from 'react'
import { GetStaticProps } from 'next'
import Image from 'next/future/image'
import Head from 'next/head'
import Stripe from 'stripe'
import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'

import { stripe } from '../lib/stripe'
import { formatPrice } from '../utils/formatPrice'

import { LoadingProduct } from '../components/shimmer/LoadingProduct'
import { CaretRight, Eye, Handbag } from 'phosphor-react'
import { Header } from '../components/Header'
import { LoadingHeader } from '../components/shimmer/LoadingHeader'

import { useShimmerEffect } from '../contexts/ShimmerContext'
import { useCart } from '../contexts/CartContext'

import {
  HomeContainer,
  Product,
  BagButtonGreen,
  ProductInfoContianer,
  EyeButton,
  NavControlLeft,
  NavControlRight,
} from '../styles/pages/home'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
    defaultPriceId: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const { isLoading } = useShimmerEffect()
  const { addProductToCart } = useCart()

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isSliderLoaded, setIsSliderLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    slides: {
      perView: 3,
      spacing: 48,
    },
    created() {
      setIsSliderLoaded(true)
    },
  })

  if (isLoading) {
    return (
      <>
        <LoadingHeader />

        <HomeContainer className="shimmer">
          <LoadingProduct />
          <LoadingProduct />
          <LoadingProduct />
          <LoadingProduct />
        </HomeContainer>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <Header />

      <HomeContainer ref={sliderRef} className="keen-slider">
        {isSliderLoaded && instanceRef.current && (
          <NavControlLeft
            className={
              currentSlide === 0
                ? 'slider-controll-invisible'
                : 'slider-controll-visible'
            }
          >
            <button
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
            >
              <CaretRight size={48} color="#e1e1e6" />
            </button>
          </NavControlLeft>
        )}

        {products?.map((product) => (
          <Product className="keen-slider__slide" key={product.id}>
            <Image src={product.imageUrl} alt="" width={520} height={480} />

            <EyeButton href={`/product/${product.id}`} prefetch={false}>
              <a>
                <Eye size={24} color="#fff" />
              </a>
            </EyeButton>

            <ProductInfoContianer>
              <div>
                <strong>{product.name}</strong>
                <span>{formatPrice(product.price)}</span>
              </div>

              <BagButtonGreen onClick={() => addProductToCart(product)}>
                <Handbag size={24} color="#fff" />
              </BagButtonGreen>
            </ProductInfoContianer>
          </Product>
        ))}

        {isSliderLoaded && instanceRef.current && (
          <NavControlRight
            className={
              currentSlide > 0 &&
              currentSlide < instanceRef.current.track.details.slides.length - 1
                ? 'slider-controll-invisible'
                : 'slider-controll-visible'
            }
          >
            <button
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
            >
              <CaretRight size={48} color="#e1e1e6" />
            </button>
          </NavControlRight>
        )}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  }
}
