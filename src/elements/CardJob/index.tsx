import React from 'react'
import Image from 'next/image'

import * as S from './styled'

import { listIconsTecnologies } from 'mock/listIconsTecnologies'

export const CardJob = () => {
  return (
    <S.Wrapper>
      <S.CardWrapper>
        <small>
          Web, UI Design, UX Design, e Designer Gráfico. <br />
          Tecnologias: NextJS, GraphQL, GraphCMS no Backend
          <br /> <br />
          <a href="https://www.behance.net/bellmontsistemaofc" target="_blank">
            Behance
          </a>
          <br />
          <a href="https://www.predialengenharia.com.br/" target="_blank">
            Web Site
          </a>
          <br />
        </small>
        <img src="/img/notebook.png" alt="Imagem aqui" />
      </S.CardWrapper>
    </S.Wrapper>
  )
}

export default CardJob
