import Image from 'next/future/image'

import { HeaderContainer, BagButton, ItemsCountBox } from './styles'

import logo from '../../assets/logo.svg'
import { Handbag } from 'phosphor-react'
import Link from 'next/link'
import { useSidebar } from '../../contexts/SidebarContext'

export function Header() {
  const { handleOpenSidebar } = useSidebar()

  return (
    <HeaderContainer>
      <Link href="/">
        <a>
          <Image src={logo} alt="" />
        </a>
      </Link>

      <BagButton onClick={handleOpenSidebar}>
        <Handbag size={24} color="#e1e1e6" />

        <ItemsCountBox>1</ItemsCountBox>
      </BagButton>
    </HeaderContainer>
  )
}
