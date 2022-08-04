import React from 'react'

import AboutUs from 'components/AboutUs'
import Developer from 'components/Developer'
import Technologies from 'components/Technologies'
import Jobs from 'components/Jobs'
import Footer from 'components/Footer'

// Request
import { GetStaticProps } from 'next'
import client from 'graphql/clients'
import { GET_TECNOLOGIES } from 'graphql/get-tecnologies'
import { GET_JOBS } from 'graphql/get-jobs'
import { Sequence } from 'components/Sequence'

const Index = ({ technologys, jobs }) => (
  <>
    <Sequence />
    <Developer />
    <Technologies technologys={technologys} />
    <AboutUs />
    <Jobs jobs={jobs} />
    <Footer />
  </>
)

export default Index

export const getStaticProps: GetStaticProps = async () => {
  const { technologys } = await client.request(GET_TECNOLOGIES)
  const { jobs } = await client.request(GET_JOBS)

  return {
    props: {
      technologys,
      jobs
    },

    revalidate: 60
  }
}
