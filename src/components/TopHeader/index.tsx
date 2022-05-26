import React from 'react'

import * as S from './styled'

import SocialIcons from 'elements/SocialIcons'

import { AssIcon } from 'icons'

export const TopHeader = () => {
  return (
    <S.Section>
      <S.Content>
        {AssIcon}

        <SocialIcons />
      </S.Content>
    </S.Section>
  )
}

export default TopHeader
