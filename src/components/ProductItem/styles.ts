import { styled } from '../../styles'

export const ProductItemContainer = styled('li', {
  display: 'flex',
  gap: '1.25rem',

  'div.image-container': {
    width: '6.375rem',
    height: '5.8125rem',
    background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
    borderRadius: 8,
  },
})

export const ProductInfo = styled('div', {
  span: {
    display: 'block',

    fontSize: '1.125rem',
    lineHeight: '1.75rem',

    color: '$gray300',
  },

  strong: {
    display: 'block',

    fontSize: '1.125rem',
    marginTop: 2,
  },

  button: {
    background: 'none',
    marginTop: '1.5rem',

    fontSize: '1rem',

    color: '$green500',
  },
})
