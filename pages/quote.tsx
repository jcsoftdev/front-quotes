import { Button } from '@/components/atoms/Button'
import Back from '@/components/atoms/Icon/Back'
import Love from '@/components/atoms/Icon/Love'
import Share from '@/components/atoms/Icon/Share/Share'
import QuoteWrapper from '@/components/atoms/QuoteWrapper'
import Wrapper from '@/components/atoms/Wrapper'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/pages/quote.module.scss'
const Quote = () => {
  return (
    <div className={styles.QuoteContainer}>
      <Wrapper className="Header">
        <Button isIcon>
          <Back />
        </Button>
      </Wrapper>

      <QuoteWrapper className={styles.Quote}>
        <div className={styles.QuoteContent}>
          <Image
            src={'/Icon/quote.svg'}
            alt="quote"
            className={styles.QuoteIcon}
            width={30}
            height={25}
          />
          <p>
            There is only one good: knowledge. There is only one evil,
            ignorance.
          </p>
        </div>
      </QuoteWrapper>

      <Wrapper className="">
        <Button>Random</Button>
        <div className={styles.BottomSection}>
          <div className={styles.Reactions}>
            <Share />
            <Love />
          </div>
          <div className={styles.Pagination}>
            <p>1/10</p>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Quote
