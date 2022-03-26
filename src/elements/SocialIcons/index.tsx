import React from 'react'
import Link from 'next/link'

import { iconsHeader } from 'mock/iconsHeader'

import * as S from './styled'

export const SocialIcons = () => {
  return (
    <S.SocialIconsWrapper>
      {iconsHeader.map((item) => (
        <li key={item.alt}>
          <Link href={item.url}>
            <a>
              <img src={item.icon} alt={item.alt} />
            </a>
          </Link>
        </li>
      ))}
    </S.SocialIconsWrapper>
  )
}

export default SocialIcons
