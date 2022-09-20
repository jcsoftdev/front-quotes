import { Button } from '@/components/atoms/Button'
import CardWrapper from '@/components/atoms/CardWrapper/CardWrapper'
import Image from 'next/image'
import styles from './Card.module.scss'

const Card = ({ image, className, textButton, title }: Card) => {
  return (
    <CardWrapper className={`${className || ''} ${styles.Card}`} withBoxShadow>
      <figure>
        <Image
          src={image || `/Icon/people.svg`}
          alt=""
          width={60}
          height={43}
        />
      </figure>
      <p className={styles.Card_Text}>{title}</p>
      <Button>{textButton}</Button>
    </CardWrapper>
  )
}

export default Card
