import { createContext, ReactNode, useContext, useState } from 'react'

type SidebarContextData = {
  isSidebarOpen: boolean
  handleOpenSidebar: () => void
  handleCloseSidebar: () => void
}

interface SidebarContextProviderProps {
  children: ReactNode
}

export const SidebarContext = createContext({} as SidebarContextData)

export function SidebarContextProvider({
  children,
}: SidebarContextProviderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  function handleOpenSidebar() {
    setIsSidebarOpen(true)
  }

  function handleCloseSidebar() {
    setIsSidebarOpen(false)
  }

  return (
    <SidebarContext.Provider
      value={{ isSidebarOpen, handleOpenSidebar, handleCloseSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  return useContext(SidebarContext)
}
