import React from 'react'
import Tilt from 'react-tilt'

import * as S from './styled'

import { listIconsTecnologies } from 'mock/listIconsTecnologies'

type TechnologiesTypes = {
  label: string
  icon: {
    url: string
  }
}

interface TechnologiesProps {
  technologys: TechnologiesTypes[]
}

export const Technologies = ({ technologys }: TechnologiesProps) => {
  return (
    <S.Section>
      <S.Content>
        <S.TechnologiesWrapper>
          <h2>Tecnologias</h2>
          <p>
            "Lembre-se que as pessoas podem tirar tudo de você, menos o seu
            conhecimento." <cite>Albert Einstein</cite>
          </p>

          <ul>
            {technologys.map((item) => (
              <li key={item.label}>
                <img src={item.icon.url} alt="Ícone HTML5" />
                {item.label}
              </li>
            ))}
          </ul>
        </S.TechnologiesWrapper>

        <S.CardWrapper>
          <Tilt className="Tilt" options={{ max: 25, speed: 400 }}>
            <a href="https://app.daily.dev/henriqueteixeir">
              <img
                src="https://api.daily.dev/devcards/a17e8f2dc0734807beb9a26a733e164e.png?r=el7"
                width="400"
                alt="Carlos Henrique Lucio Teixeira's Dev Card"
              />
            </a>
          </Tilt>
        </S.CardWrapper>
      </S.Content>
    </S.Section>
  )
}

export default Technologies
