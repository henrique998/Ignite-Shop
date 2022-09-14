import { styled } from '../../../styles'

export const LoadingProductContainer = styled('div', {
  display: 'grid',
  gap: '1.5rem',

  'div.box-skeleton': {
    height: '37.5rem',
    width: '28.375rem',
    borderRadius: 8,
  },
})

export const RowsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  'div.row-skeleton': {
    height: '2rem',
    borderRadius: 8,

    '&.first': {
      width: '10.875rem',
    },

    '&.second': {
      width: '3.25rem',
    },
  },
})
