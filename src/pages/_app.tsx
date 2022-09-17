import { AppProps } from 'next/app'
import { Sidebar } from '../components/Sidebar'
import { CartContextProvider } from '../contexts/CartContext'
import { ShimmerContextProvider } from '../contexts/ShimmerContext'
import { SidebarContextProvider } from '../contexts/SidebarContext'

import { globalStyles } from '../styles/global'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShimmerContextProvider>
      <CartContextProvider>
        <SidebarContextProvider>
          <Sidebar />

          <Component {...pageProps} />
        </SidebarContextProvider>
      </CartContextProvider>
    </ShimmerContextProvider>
  )
}
