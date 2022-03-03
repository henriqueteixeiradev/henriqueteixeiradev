import React from 'react'

import * as S from './styled'

import { listIconsTecnologies } from 'mock/listIconsTecnologies'
import CardJob from 'elements/CardJob'

export const SectionJobs = () => {
  return (
    <S.Section>
      <S.Content>
        <S.TitleWrapper>
          <h2>Jobs</h2>
        </S.TitleWrapper>
        <CardJob />
      </S.Content>
    </S.Section>
  )
}

export default SectionJobs
