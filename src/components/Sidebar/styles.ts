import { motion } from 'framer-motion'
import { styled } from '../../styles'

export const SidebarContainer = styled(motion.aside, {
  position: 'fixed',
  zIndex: 999,
  right: 0,
  height: '100%',
  backgroundColor: '$gray800',

  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',

  h2: {
    marginTop: '1.5rem',
    color: '$gray100',
  },
})

export const CloseButtonContainer = styled('header', {
  position: 'relative',
  backgroundColor: 'Red',

  button: {
    position: 'absolute',
    right: '-1rem',
    top: '-1rem',

    background: 'none',
    lineHeight: 0,
  },
})

export const ProductsList = styled('ul', {
  marginTop: '3rem',

  'li + li': {
    marginTop: '1.5rem',
  },

  height: 'calc(100% - 24.125rem)',
  overflowY: 'auto',
})

export const CheckoutInfoContainer = styled('div', {
  marginTop: '2rem',

  display: 'grid',
  gap: '0.5rem',

  div: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    fontSize: '1rem',
    color: '$gray100',
  },

  'div + div': {
    marginTop: '0.5rem',
  },

  'strong.label': {
    fontSize: '1.125rem',
  },

  'strong.price': {
    fontSize: '1.5rem',
  },
})

export const CheckoutButton = styled('button', {
  marginTop: '3.625rem',

  height: '4.375rem',
  width: '100%',
  backgroundColor: '$green500',
  borderRadius: 8,
  color: '$white',
  fontSize: '1.125rem',
  fontWeight: 700,

  '&:not(:disabled):hover': {
    backgroundColor: '$green300',
    transition: '0.2s',
  },

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
})

export const EmptyBagContainer = styled('div', {
  height: 'calc(100% - 21.125rem)',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    width: '4.375rem',
    height: '4.375rem',
  },

  h3: {
    marginTop: '1.5rem',
    maxWidth: 310,
    textAlign: 'center',
    color: '$gray100',
    fontWeight: 500,
  },
})
