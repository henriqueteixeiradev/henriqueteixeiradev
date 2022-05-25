import React, { useEffect, useState } from 'react'

import * as S from './styled'

export const Sequence = () => {
  const [image, setImage] = useState(0)
  const [imagesArray, setImagesArray] = useState([])

  function trackScrollPosition() {
    const position = window.scrollY
    const number = Math.min(Math.floor(position / 30) + 1, 150)
    setImage(number)
    console.log(number)
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

    console.log(myArray)
  }, [])

  return (
    <S.Section>
      {image <= imagesArray.length - 1 ? (
        imagesArray.map((element, i) => (
          <S.Content
            key={i}
            onScroll={trackScrollPosition}
            style={{
              backgroundImage: `url('${element}')`,
              display: `${image !== i ? 'none' : 'block'}`
            }}
          />
        ))
      ) : (
        <S.ContentFixed
          onScroll={trackScrollPosition}
          style={{
            backgroundImage: `url('/sequence/69.jpg')`,
            display: `block'}`
          }}
        />
      )}
    </S.Section>
  )
}
