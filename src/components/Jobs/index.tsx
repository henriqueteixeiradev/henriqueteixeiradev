import React from 'react'

import * as S from './styled'

import CardJob, { CardJobProps } from 'elements/CardJob'

export const Jobs = ({ jobs }: CardJobProps) => {
  return (
    <S.Section>
      <S.Content>
        <S.TitleWrapper>
          <h2>Jobs</h2>
        </S.TitleWrapper>
        <CardJob jobs={jobs} />
      </S.Content>
    </S.Section>
  )
}

export default Jobs
