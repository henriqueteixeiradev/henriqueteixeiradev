import React from 'react'
import Link from 'next/link'

import * as S from './styled'

export const Header = () => {
  return (
    <S.Section>
      <S.Content>
        <video autoPlay loop muted id="video">
          <source src="/img/video.mp4" type="video/mp4" />
        </video>
      </S.Content>
    </S.Section>
  )
}

export default Header
