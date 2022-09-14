import { styled } from '..'

export const AppContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  alignContent: 'center',
  justifyContent: 'space-between',
})

export const BagButton = styled('button', {
  width: '3rem',
  height: '3rem',
  backgroundColor: '$gray800',
  borderRadius: 6,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  position: 'relative',

  '&:hover': {
    filter: 'brightness(0.85)',
    transition: '0.2s',
  },
})

export const ItemsCountBox = styled('div', {
  width: '1.25rem',
  height: '1.25rem',
  borderRadius: '50%',
  backgroundColor: '$green500',
  color: '$white',
  border: '3px solid $gray900',

  fontSize: '0.875rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  position: 'absolute',
  top: '-13.5%',
  right: '-13.5%',
})
