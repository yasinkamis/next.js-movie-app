import Layout from '../components/layout'
import Navbar from '../components/Navbar'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Navbar/>
      <Component {...pageProps} />
    </Layout>
  )
}