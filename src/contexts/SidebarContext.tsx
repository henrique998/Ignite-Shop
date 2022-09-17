import { createContext, ReactNode, useContext, useState } from 'react'

type SidebarContextData = {
  isSidebarOpen: boolean
  isCreatingCheckoutSession: boolean
  handleOpenSidebar: () => void
  handleCloseSidebar: () => void
  defineIsCreatingCheckoutSession: (state: boolean) => void
}

interface SidebarContextProviderProps {
  children: ReactNode
}

export const SidebarContext = createContext({} as SidebarContextData)

export function SidebarContextProvider({
  children,
}: SidebarContextProviderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  function defineIsCreatingCheckoutSession(state: boolean) {
    setIsCreatingCheckoutSession(state)
  }

  function handleOpenSidebar() {
    setIsSidebarOpen(true)
  }

  function handleCloseSidebar() {
    setIsSidebarOpen(false)
  }

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen,
        isCreatingCheckoutSession,
        handleOpenSidebar,
        handleCloseSidebar,
        defineIsCreatingCheckoutSession,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  return useContext(SidebarContext)
}
