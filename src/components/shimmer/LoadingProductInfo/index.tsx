import {
  LoadingProductInfoContainer,
  BannerSkeleton,
  DetailsContainer,
  TitleSkeleton,
  PriceSkeleton,
  DescriptionSkeleton,
  ButtonSkeleton,
} from './styles'

export function LoadingProductInfo() {
  return (
    <LoadingProductInfoContainer>
      <BannerSkeleton />

      <DetailsContainer>
        <TitleSkeleton />
        <PriceSkeleton />
        <DescriptionSkeleton />

        <ButtonSkeleton />
      </DetailsContainer>
    </LoadingProductInfoContainer>
  )
}
