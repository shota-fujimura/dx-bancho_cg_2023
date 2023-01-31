import Layout from '../components/layout'
import Hero from '../components/Hero'
import Section_1 from '../components/Section_1'
import Section_2 from '../components/Section_2'
import Section_3 from '../components/Section_3'
import Section_4 from '../components/Section_4'
import CTA_Line from '../components/Cta_Line'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>DX Bancho</title>
        <meta name="description" content="最速で改革。最安で実現。利益に直結。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout className="container mx-auto">
        <Hero />
        <Section_4 />
        <Section_1 />
        <Section_2 />
        <Section_3 />
        <CTA_Line />
      </Layout>
    </>
  )
}
