import React, { useEffect, useState } from 'react'

import * as S from './styled'

export interface DarkLightModeProps {
  toggleTheme(): void
}

export const DarkAndLightButton = ({ toggleTheme }: DarkLightModeProps) => {
  const [switchButton, setSwitchButton] = useState('dark')

  useEffect(() => {
    const ISSERVER = typeof window === 'undefined'

    const storageThemeValue = !ISSERVER && localStorage.getItem('theme')

    if (storageThemeValue) {
      return setSwitchButton(JSON.parse(storageThemeValue).title)
    }
  }, [switchButton])

  return (
    <S.IconsWrapper>
      <S.IconsWrapper>
        {switchButton === 'dark' && (
          <S.DarkButton
            onClick={toggleTheme}
            onMouseOutCapture={() => setSwitchButton('light')}
          ></S.DarkButton>
        )}

        {switchButton === 'light' && (
          <S.LightButton
            onClick={toggleTheme}
            onMouseOutCapture={() => setSwitchButton('dark')}
          ></S.LightButton>
        )}
      </S.IconsWrapper>
    </S.IconsWrapper>
  )
}

export default DarkAndLightButton
