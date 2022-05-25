import TopHeader from 'components/TopHeader'
import React, { useEffect, useState } from 'react'

import * as S from './styled'

const AsyncImage = (props: any) => {
  const [loadProps, setLoadProps] = React.useState(null)

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

export const Sequence = () => {
  const [image, setImage] = useState(0)
  const [imagesArray, setImagesArray] = useState([])

  function trackScrollPosition() {
    const position = window.scrollY
    const number = Math.min(Math.floor(position / 30) + 1, 60)
    setImage(number)
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', trackScrollPosition)
  }

  useEffect(() => {
    let myArray = new Array(70)

    for (let i = 0; i < myArray.length; i++) {
      myArray[i] = `/sequence/${i}.jpg`
    }
    setImagesArray(myArray)
  }, [])

  const screenWidht = window.innerWidth

  return (
    <>
      <S.Section>
        {imagesArray.map((element, i) => (
          <S.Content
            key={i}
            onScroll={trackScrollPosition}
            style={{
              display: `${image !== i ? 'none' : 'flex'}`
            }}
          >
            <TopHeader />
            {screenWidht > 768 ? (
              <AsyncImage key={i} src={element} />
            ) : (
              <img src="/sequence/69.jpg" alt="Imagem" />
            )}
          </S.Content>
        ))}
      </S.Section>
    </>
  )
}
