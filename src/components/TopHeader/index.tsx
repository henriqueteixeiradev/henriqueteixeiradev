import React, { useEffect, useState } from 'react'

import * as S from './styled'

import SocialIcons from 'elements/SocialIcons'

import { AssIcon } from 'icons'
import DarkAndLightButton, {
  DarkLightModeProps
} from 'elements/DarkAndLightButton'

export const TopHeader = ({ toggleTheme }: DarkLightModeProps) => {
  return (
    <S.Section>
      {AssIcon}

      <DarkAndLightButton toggleTheme={toggleTheme} />

      <SocialIcons />
    </S.Section>
  )
}

export default TopHeader
