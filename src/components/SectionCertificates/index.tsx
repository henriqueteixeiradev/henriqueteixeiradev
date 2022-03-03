import React from 'react'

import * as S from './styled'

import { listIconsTecnologies } from 'mock/listIconsTecnologies'

export const SectionCertificates = () => {
  return (
    <S.Section>
      <S.Content>
        <S.LeftWrapper>
          <h2>Certificados</h2>
          <p>
            "No meio de toda dificuldade encontra-se a oportunidade."{' '}
            <cite>Albert Einstein</cite>
          </p>
        </S.LeftWrapper>

        <S.CardsWrapper>
          <S.Card>
            <a
              href="https://www.devmedia.com.br/certificado/tecnologia/html/carlos-henrique-120"
              target="_blank"
            >
              <img src="/img/html.png" alt="Certificado HTML" />
            </a>
            <b>HTML</b>
          </S.Card>
          <S.Card>
            <a
              href="https://www.devmedia.com.br/certificado/tecnologia/css/carlos-henrique-120"
              target="_blank"
            >
              <img src="/img/css.png" alt="Certificado HTML" />
            </a>
            <b>CSS</b>
          </S.Card>
          <S.Card>
            <a
              href="https://www.origamid.com/certificate/f7267c59/"
              target="_blank"
            >
              <img src="/img/webdesign.png" alt="Certificado HTML" />
            </a>
            <b>WEB DESIGN</b>
          </S.Card>
          <S.Card>
            <a
              href="https://www.origamid.com/certificate/1876809e/"
              target="_blank"
            >
              <img src="/img/javascript.png" alt="Certificado HTML" />
            </a>
            <b>JAVASCRIPT</b>
          </S.Card>
          <S.Card>
            <a
              href="https://www.udemy.com/certificate/UC-ab65c5a9-1256-4ea5-a3f0-9d7b82ead624/0"
              target="_blank"
            >
              <img src="/img/react.jpg" alt="Certificado HTML" />
            </a>
            <b>REACT JS</b>
          </S.Card>
          <S.Card>
            <a
              href="https://www.devmedia.com.br/certificado/tecnologia/html/carlos-henrique-120"
              target="_blank"
            >
              <img src="/img/certificado_html.png" alt="Certificado HTML" />
            </a>
            <b>NEXT JS / GRAPHQL</b>
          </S.Card>
          <S.Card>
            <a
              href="https://www.udemy.com/certificate/UC-4fd33a85-b8cb-4a4d-80b5-11c3c751f87d/"
              target="_blank"
            >
              <img src="/img/next.jpg" alt="Certificado HTML" />
            </a>
            <b>NEXT JS</b>
          </S.Card>
          <S.Card>
            <a
              href="https://www.udemy.com/certificate/UC-81524401-8b61-41e4-a3cc-9b4169137696/"
              target="_blank"
            >
              <img src="/img/tailwind.jpg" alt="Certificado HTML" />
            </a>
            <b>TAILWIND</b>
          </S.Card>
          <S.Card>
            <a
              href="https://www.udemy.com/certificate/UC-c63ed01c-4d59-4242-86dc-1b80cbd33cd6/"
              target="_blank"
            >
              <img src="/img/greensock.jpg" alt="Certificado HTML" />
            </a>
            <b>GREENSOCK</b>
          </S.Card>
          <S.Card>
            <a
              href="https://www.origamid.com/certificate/41bdcef7/"
              target="_blank"
            >
              <img src="/img/ui.png" alt="Certificado HTML" />
            </a>
            <b>UI DESIGN</b>
          </S.Card>
          <S.Card>
            <a
              href="https://www.origamid.com/certificate/215cdb8e/"
              target="_blank"
            >
              <img src="/img/ux.png" alt="Certificado HTML" />
            </a>
            <b>UX DESIGN</b>
          </S.Card>
        </S.CardsWrapper>
      </S.Content>
    </S.Section>
  )
}

export default SectionCertificates
