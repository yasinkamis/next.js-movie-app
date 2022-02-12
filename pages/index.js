import Head from 'next/head'
import Layout from '../components/layout'
import MovieList from '../components/MovieList'

export default function Home() {
  return (
    <Layout className="container">
      <Head>
        <title>Movie App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MovieList/>
    </Layout>
  )
}
