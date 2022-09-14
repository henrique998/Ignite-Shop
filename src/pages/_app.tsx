import { AppProps } from 'next/app'
import Image from 'next/future/image'

import { globalStyles } from '../styles/global'
import {
  AppContainer,
  BagButton,
  Header,
  ItemsCountBox,
} from '../styles/pages/app'

import logo from '../assets/logo.svg'
import { Handbag } from 'phosphor-react'
import Link from 'next/link'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContainer>
      <Header>
        <Link href="/">
          <a>
            <Image src={logo} alt="" />
          </a>
        </Link>

        <BagButton>
          <Handbag size={24} color="#e1e1e6" />

          <ItemsCountBox>1</ItemsCountBox>
        </BagButton>
      </Header>

      <Component {...pageProps} />
    </AppContainer>
  )
}
