import React, { useEffect, useState } from 'react'
import Link from 'next/link'

interface DarkLightModeProps {
  toggleTheme(): void
}

import * as S from './styled'

import { iconsHeader } from 'mock/iconsHeader'
import { AssIcon } from 'icons'

export const TopHeader = ({ toggleTheme }: DarkLightModeProps) => {
  const [switchButton, setSwitchButton] = useState('dark')

  useEffect(() => {
    const ISSERVER = typeof window === 'undefined'

    const storageThemeValue = !ISSERVER && localStorage.getItem('theme')

    if (storageThemeValue) {
      return setSwitchButton(JSON.parse(storageThemeValue).title)
    }
  }, [switchButton])

  return (
    <S.LogoWrapper>
      {AssIcon}

      <S.IconsWrapper>
        {/* {switchButton === 'dark' && (
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
        )} */}

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
    </S.LogoWrapper>
  )
}

export default TopHeader
