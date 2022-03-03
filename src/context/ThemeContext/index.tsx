import React, { createContext, useEffect, useState } from 'react'

type DarkLightContextProps = {
  toggleMode: string
}

export const DarkLightContext = createContext({} as DarkLightContextProps)

export const ThemeModeProvider = ({ children }) => {
  const [toggleMode, setToggleMode] = useState('dark')

  return (
    <DarkLightContext.Provider
      value={{
        toggleMode
      }}
    >
      {children}
    </DarkLightContext.Provider>
  )
}
