import React from 'react'
import Link from 'next/link'

import * as S from './styled'

import { iconsHeader } from 'mock/iconsHeader'
import { AssIcon } from 'icons'

export const Footer = () => {
  return (
    <S.Section>
      <S.Content>
        {AssIcon}
        <span>© {new Date().getFullYear()}, Todos os direitos reservados.</span>
        <S.IconsWrapper>
          {iconsHeader.map((item) => (
            <li key={item.alt}>
              <Link href={item.url}>
                <a>
                  <img src={item.icon} alt={item.alt} />
                </a>
              </Link>
            </li>
          ))}
        </S.IconsWrapper>
      </S.Content>
    </S.Section>
  )
}

export default Footer
