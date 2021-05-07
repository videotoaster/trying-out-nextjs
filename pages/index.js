import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
