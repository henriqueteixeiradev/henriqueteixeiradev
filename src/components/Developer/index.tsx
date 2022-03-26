import React from 'react'

import * as S from './styled'

import { tableName } from 'mock/tableName'

export const Developer = () => {
  return (
    <S.Section>
      <S.Content>
        <h1>Henrique Teixeira</h1>

        <table>
          <tbody>
            {tableName.map((item, i) => (
              <tr key={i}>
                <td>
                  <img src={item.numberIconOne} alt="Ícone" />
                </td>
                <td className="letter">
                  <span>{item.letter}</span>
                </td>
                <td>
                  <img src={item.numberIconTwo} alt="Ícone" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </S.Content>
    </S.Section>
  )
}

export default Developer
