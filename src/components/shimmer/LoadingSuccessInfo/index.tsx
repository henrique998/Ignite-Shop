import {
  LoadingSuccessInfoContainer,
  HeaderSkeleton,
  LoadingImagesContainer,
  TitleSkeleton,
  ImageSkeleton,
  DescriptionSkeleton,
  BackLinkSkeleton,
} from './styles'

export function LoadingSuccessInfo() {
  return (
    <LoadingSuccessInfoContainer>
      <HeaderSkeleton />

      <LoadingImagesContainer>
        <ImageSkeleton className="image-skeleton" />
        <ImageSkeleton className="image-skeleton" />
        <ImageSkeleton className="image-skeleton" />
      </LoadingImagesContainer>

      <TitleSkeleton />

      <DescriptionSkeleton />

      <BackLinkSkeleton />
    </LoadingSuccessInfoContainer>
  )
}
