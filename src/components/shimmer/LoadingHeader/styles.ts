import { styled } from '../../../styles'
import Skeleton from '../../Skeleton'

export const LoadingHeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  alignContent: 'center',
  justifyContent: 'space-between',
})

export const LogoSkeleton = styled(Skeleton, {
  width: '8.125rem',
  height: '3.25rem',
  borderRadius: 6,
})

export const BagSkeleton = styled(Skeleton, {
  width: '3rem',
  height: '3rem',
  borderRadius: 6,
})
