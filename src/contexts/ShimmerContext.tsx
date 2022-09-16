import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

type ShimmerContextData = {
  isLoading: boolean
}

interface ShimmerContextProviderProps {
  children: ReactNode
}

export const ShimmerContext = createContext({} as ShimmerContextData)

export function ShimmerContextProvider({
  children,
}: ShimmerContextProviderProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000)
  }, [])

  return (
    <ShimmerContext.Provider value={{ isLoading }}>
      {children}
    </ShimmerContext.Provider>
  )
}

export function useShimmerEffect() {
  return useContext(ShimmerContext)
}
