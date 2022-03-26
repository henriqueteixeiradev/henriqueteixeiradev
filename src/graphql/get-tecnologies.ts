import { gql } from 'graphql-request'

export const GET_TECNOLOGIES = gql`
  query get_tecnologies {
    technologys(orderBy: label_ASC) {
      icon {
        url
      }
      label
    }
  }
`
