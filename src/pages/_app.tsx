import { AppProps } from 'next/app'
import { Sidebar } from '../components/Sidebar'
import { ShimmerContextProvider } from '../contexts/ShimmerContext'
import { SidebarContextProvider } from '../contexts/SidebarContext'

import { globalStyles } from '../styles/global'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShimmerContextProvider>
      <SidebarContextProvider>
        <Sidebar />

        <Component {...pageProps} />
      </SidebarContextProvider>
    </ShimmerContextProvider>
  )
}
