import { useState, useEffect, Dispatch, SetStateAction } from 'react'

type usePersistedState<T> = [T, Dispatch<SetStateAction<T>>]

function usePersistedState<T>(
  key: string,
  initialState: any
): usePersistedState<T> {
  const [themeState, setThemeState] = useState(() => {
    const ISSERVER = typeof window === 'undefined'

    const storageThemeValue = !ISSERVER && localStorage.getItem(key)

    if (storageThemeValue) {
      return JSON.parse(storageThemeValue)
    } else {
      return initialState
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(themeState))
  }, [key, themeState])

  return [themeState, setThemeState]
}

export default usePersistedState
