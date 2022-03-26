import { gql } from 'graphql-request'

export const GET_JOBS = gql`
  query get_jobs {
    jobs {
      order
      description
      image {
        url
        width
        height
      }
      links {
        ... on LinksJob {
          label
          url
        }
      }
    }
  }
`
