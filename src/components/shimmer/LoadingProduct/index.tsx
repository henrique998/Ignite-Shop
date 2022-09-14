import Skeleton from '../../Skeleton'
import { LoadingProductContainer, RowsContainer } from './styles'

export function LoadingProduct() {
  return (
    <LoadingProductContainer>
      <Skeleton className="box-skeleton" />

      <RowsContainer>
        <Skeleton className="row-skeleton first" />
        <Skeleton className="row-skeleton second" />
      </RowsContainer>
    </LoadingProductContainer>
  )
}
