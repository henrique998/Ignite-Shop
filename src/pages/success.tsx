import { GetServerSideProps } from 'next'
import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import Stripe from 'stripe'
import { stripe } from '../lib/stripe'
import { ImageContainer, SuccessContainer } from '../styles/pages/success'

interface SuccessProps {
  purchaseData: {
    customerName: string
    product: {
      name: string
      imageUrl: string
    }
  }
}

export default function Success({ purchaseData }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada</h1>

        <ImageContainer>
          <Image
            src={purchaseData?.product.imageUrl}
            alt=""
            width={114}
            height={106}
          />
        </ImageContainer>

        <p>
          Uhuul <strong>{purchaseData?.customerName}</strong>, sua{' '}
          <strong>{purchaseData?.product.name}</strong> já está a caminho da sua
          casa.{' '}
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const productData = session.line_items.data[0].price.product as Stripe.Product

  const purchaseData = {
    customerName: session.customer_details.name,
    product: {
      name: productData.name,
      imageUrl: productData.images[0],
    },
  }

  return {
    props: { purchaseData },
  }
}
