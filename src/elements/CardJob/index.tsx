import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import * as S from './styled'

type CardJobType = {
  description: string
  order: number
  image: {
    url: string
    width: number
    height: number
  }
  links: {
    label: string
    url: string
  }
}

export interface CardJobProps {
  jobs: CardJobType[]
}

export const CardJob = ({ jobs }: CardJobProps) => {
  console.log(jobs[0].image.url)

  return (
    <S.Wrapper>
      {jobs.map((item, i) => (
        <S.CardWrapper key={i}>
          <small>
            {item.description}
            <ul>
              {item.links[0] && (
                <li>
                  <Link href={item.links[0].url}>
                    <a target="_blank">{item.links[0].label}</a>
                  </Link>
                </li>
              )}

              {item.links[1] && (
                <li>
                  <Link href={item.links[1].url}>
                    <a target="_blank">{item.links[1].label}</a>
                  </Link>
                </li>
              )}
            </ul>
          </small>

          <S.ImageWrapper>
            <Image
              src={item.image.url}
              alt="Mockup Simulação Desktop e Mobile"
              width={item.image.width}
              height={item.image.height}
            />
          </S.ImageWrapper>
        </S.CardWrapper>
      ))}
    </S.Wrapper>
  )
}

export default CardJob
