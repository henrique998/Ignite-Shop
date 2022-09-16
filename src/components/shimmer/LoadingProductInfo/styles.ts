import { styled } from '../../../styles'
import Skeleton from '../../Skeleton'

export const LoadingProductInfoContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: 1180,
  margin: '0 auto',
})

export const BannerSkeleton = styled(Skeleton, {
  width: '100%',
  maxWidth: 576,
  height: 656,
  borderRadius: 8,
})

export const DetailsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const TitleSkeleton = styled(Skeleton, {
  width: '100%',
  height: '2.875rem',
})

export const PriceSkeleton = styled(Skeleton, {
  marginTop: '1rem',

  width: '7.875rem',
  height: '2.875rem',
})

export const DescriptionSkeleton = styled(Skeleton, {
  marginTop: '2.5rem',

  width: '100%',
  height: '10.875rem',
})

export const ButtonSkeleton = styled(Skeleton, {
  marginTop: 'auto',

  width: '100%',
  height: '4.3125rem',
})
