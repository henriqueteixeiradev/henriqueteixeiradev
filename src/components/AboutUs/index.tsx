import React from 'react'

import * as S from './styled'

import { listIconsTecnologies } from 'mock/listIconsTecnologies'
import { Square } from 'icons'

export const AboutUs = () => {
  return (
    <S.Section>
      <S.Content>
        <S.LeftWrapper>
          <h2>Sobre Mim</h2>
          <p>
            Meu nome é Henrique Teixeira tenho 33 anos, nasci em Guarulhos - SP.
            <br />
            Venho de uma família nordestina. Trabalhei dos 15 aos 31 anos
            <br />
            como Técnico em Segurança Eletrônica.
          </p>
        </S.LeftWrapper>

        <S.CardWrapper>
          {Square}
          <p>
            Quando começou a pandemia em 2020 fiquei desempregado e resolvi
            mudar de profissão, como já tinha contato com tecnologia escolhi
            trabalhar como Desenvolvedor Web. <br /> Logo nos primeiros meses me
            apaixonei pela profissão e hoje é a minha principal fonte de renda.
          </p>
        </S.CardWrapper>
      </S.Content>
    </S.Section>
  )
}

export default AboutUs
