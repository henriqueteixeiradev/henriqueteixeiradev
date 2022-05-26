import React from 'react'

import * as S from './styled'

import SocialIcons from 'elements/SocialIcons'

import { AssIcon } from 'icons'

export const TopHeader = () => {
  return (
    <S.Section>
      <S.Content>
        {AssIcon}
        <img src="/img/scroll-down.gif" width={60} alt="Imagem scroll down" />
        <SocialIcons />
      </S.Content>
    </S.Section>
  )
}

export default TopHeader
