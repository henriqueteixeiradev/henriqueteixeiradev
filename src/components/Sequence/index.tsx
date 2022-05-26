import { AsyncImage } from 'components/AsyncImage'
import TopHeader from 'components/TopHeader'
import React, { useEffect, useState } from 'react'

import * as S from './styled'

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

  return (
    <>
      <S.Section>
        <S.ImageByImageWrapper>
          {imagesArray.map((element, i) => (
            <S.ImageByImage
              key={i}
              onScroll={trackScrollPosition}
              style={{
                display: `${image !== i ? 'none' : 'block'}`
              }}
            >
              <TopHeader />
              <AsyncImage key={i} src={element} />
            </S.ImageByImage>
          ))}
        </S.ImageByImageWrapper>

        <S.FixedImage>
          <img src="/sequence/69.jpg" />
        </S.FixedImage>
      </S.Section>
    </>
  )
}
