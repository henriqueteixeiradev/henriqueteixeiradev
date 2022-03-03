import React from 'react'

import * as S from './styled'

import { listIconsTecnologies } from 'mock/listIconsTecnologies'

export const AboutUs = () => {
  return (
    <S.Section>
      <S.Content>
        <S.LeftWrapper>
          <h2>Sobre Mim</h2>
          <p>
            Meu nome é Henrique Teixeira tenho 33 anos, nasci em Guarulhos - SP.
            Venho de uma família nordestina. <br />
            Trabalhei dos 15 aos 31 anos como Técnico em Segurança Eletrônica.
          </p>
        </S.LeftWrapper>

        <S.CardWrapper>
          <img src="/img/icon_squares.svg" alt="Ícones Quadrados Azuis" />
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
