import { keyframes, styled } from '../../styles'

const shimmer = keyframes({
  '0%': {
    backgroundPosition: '0% 0%',
  },
  '100%': {
    backgroundPosition: '-135% 0%',
  },
})

export default styled('div', {
  backgroundImage:
    'linear-gradient(-90deg, $gray800 0%, $gray900 50%, $gray800 100%)',

  backgroundSize: '400% 400%',
  animation: `${shimmer} 1.5s ease-in-out infinite`,
})
