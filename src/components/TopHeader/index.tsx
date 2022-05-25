import React from 'react'

import * as S from './styled'

import SocialIcons from 'elements/SocialIcons'

import { AssIcon } from 'icons'

export const TopHeader = () => {
  return (
    <S.Section>
      {AssIcon}

      <SocialIcons />
    </S.Section>
  )
}

export default TopHeader
