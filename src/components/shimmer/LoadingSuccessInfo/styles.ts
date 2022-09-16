import { styled } from '../../../styles'
import Skeleton from '../../Skeleton'

export const LoadingSuccessInfoContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const HeaderSkeleton = styled(Skeleton, {
  marginTop: '3rem',

  width: '8.125rem',
  height: '3.25rem',
})

export const LoadingImagesContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '.image-skeleton + .image-skeleton': {
    marginLeft: '-12.5%',
  },
})

export const ImageSkeleton = styled(Skeleton, {
  marginTop: '6.5rem',

  width: '8.75rem',
  height: '8.75rem',
  borderRadius: '50%',

  boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',
})

export const TitleSkeleton = styled(Skeleton, {
  marginTop: '3rem',

  width: '16.125rem',
  height: '2.875rem',
})

export const DescriptionSkeleton = styled(Skeleton, {
  marginTop: '1.5rem',

  width: '36.875rem',
  height: '4.25rem',
})

export const BackLinkSkeleton = styled(Skeleton, {
  marginTop: '5rem',

  width: '10.25rem',
  height: '2rem',
})
