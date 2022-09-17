import Link from 'next/link'
import { styled } from '..'

export const HomeContainer = styled('main', {
  position: 'relative',

  display: 'flex',

  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,

  '&.shimmer': {
    gap: '3rem',
    overflow: 'hidden',
  },

  '.slider-controll-visible': {
    opacity: 1,
  },

  '.slider-controll-invisible': {
    display: 'none',
  },
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  position: 'relative',

  cursor: 'auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})

export const EyeButton = styled(Link, {
  a: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    position: 'absolute',
    top: '0.25rem',
    left: '0.25rem',

    width: '2.25rem',
    height: '2.25rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export const ProductInfoContianer = styled('footer', {
  position: 'absolute',
  bottom: '0.25rem',
  left: '0.25rem',
  right: '0.25rem',
  padding: '2rem',
  overflow: 'hidden',

  borderRadius: 6,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  backgroundColor: 'rgba(0, 0, 0, 0.6)',

  transform: 'translateY(110%)',
  opacity: 0,
  transition: 'all 0.2s ease-in-out',

  strong: {
    display: 'block',
    marginTop: 4,
    fontSize: '$lg',
    color: '$gray100',
  },

  span: {
    fontSize: '$xl',
    fontWeight: 'bold',
    color: '$green300',
  },

  '&:focus': {
    cursor: 'grabbing',
  },
})

export const BagButtonGreen = styled('button', {
  width: '3rem',
  height: '3rem',
  backgroundColor: '$green500',
  borderRadius: 6,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  position: 'relative',

  '&:hover': {
    backgroundColor: '$green300',
    transition: '0.2s',
  },
})

export const NavControl = styled('div', {
  height: '100%',
  width: '8.5rem',
})

export const NavControlLeft = styled(NavControl, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  background:
    'linear-gradient(90deg, rgba(18, 18, 20, 0) 0%, rgba(18, 18, 20, 0.75) 100%)',

  transform: 'matrix(-1, 0, 0, 1, 0, 0)',

  position: 'absolute',
  left: 0,
  top: 0,
  bottom: 0,
  zIndex: 100,

  button: {
    background: 'none',
  },

  '&:disabled': {
    display: 'none',
  },
})

export const NavControlRight = styled(NavControl, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  background:
    'linear-gradient(90deg, rgba(18, 18, 20, 0) 0%, rgba(18, 18, 20, 0.75) 100%)',

  position: 'absolute',
  right: 0,
  top: 0,
  bottom: 0,
  zIndex: 200,

  button: {
    background: 'none',
  },
})
