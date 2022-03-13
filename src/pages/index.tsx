import SEO from '@/components/seo'
import Wrapper from '@/components/wrapper'
import 'dayjs/locale/fr'
import type { NextPage } from 'next'
import * as React from 'react'
import dynamic from 'next/dynamic'

const Starter = dynamic(import('@/components/starter'))

const Home: NextPage = () => {
  return (
    <Wrapper>
      <SEO
        title="MUI NextJs Starter"
        description="MUI NextJs with TypeScript Starter Kit"
        name="MUI NextJs with TypeScript Starter Kit"
        logo="/vercel.svg"
        favicon="/favicon.ico"
        image="/vercel.svg"
        phone="00000000"
        GA_MEASUREMENT_ID="0000000000"
      />
      <Starter />
    </Wrapper>
  )
}

export default Home
