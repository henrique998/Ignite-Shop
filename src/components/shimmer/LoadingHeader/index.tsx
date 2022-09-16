import { LogoSkeleton, BagSkeleton, LoadingHeaderContainer } from './styles'

export function LoadingHeader() {
  return (
    <LoadingHeaderContainer>
      <LogoSkeleton />
      <BagSkeleton />
    </LoadingHeaderContainer>
  )
}
