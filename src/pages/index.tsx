import React from 'react'

import AboutUs from 'components/AboutUs'
import Developer from 'components/Developer'
import Technologies from 'components/Technologies'
import Footer from 'components/Footer'

// Request
import { GetStaticProps } from 'next'
import client from 'graphql/clients'
import { GET_TECNOLOGIES } from 'graphql/get-tecnologies'
import { Sequence } from 'components/Sequence'

const Index = ({ technologys }) => (
  <>
    <Sequence />
    <Developer />
    <Technologies technologys={technologys} />
    <AboutUs />
    <Footer />
  </>
)

export default Index

export const getStaticProps: GetStaticProps = async () => {
  const { technologys } = await client.request(GET_TECNOLOGIES)

  return {
    props: {
      technologys
    },

    revalidate: 60
  }
}
