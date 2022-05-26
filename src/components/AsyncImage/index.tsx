import React, { useEffect, useState } from 'react'

export const AsyncImage = (props: any) => {
  const [loadProps, setLoadProps] = useState(null)

  useEffect(() => {
    setLoadProps(null)
    if (props.src) {
      const handleLoadScreen = () => {
        setLoadProps(props.src)
      }
      const image = new Image()
      image.addEventListener('load', handleLoadScreen)
      image.src = props.src
      return () => {
        image.removeEventListener('load', handleLoadScreen)
      }
    }
  }, [props.src])

  if (loadProps === props.src) {
    if (loadProps === null) {
      return <div>Carregando</div>
    } else {
      return <img {...props} />
    }
  }
  return null
}
