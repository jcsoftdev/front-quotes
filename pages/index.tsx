import type { NextPage } from 'next'
import Head from 'next/head'

import styles from '../styles/Home.module.scss'
import CategoryList from '@/components/organisms/CategoryList'
import Header from '@/components/organisms/Header'
import Wrapper from '@/components/atoms/Wrapper'

const Home: NextPage = () => {
  return (
    <Wrapper className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <CategoryList />
      </main>
    </Wrapper>
  )
}

export default Home
