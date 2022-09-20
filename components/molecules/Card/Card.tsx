import { Button } from '@/components/atoms/Button'
import CardWrapper from '@/components/atoms/CardWrapper/CardWrapper'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from './Card.module.scss'

const Card = ({ image, className, textButton, title }: Card) => {
  const router = useRouter()

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
      <Button
        onClick={() => {
          router.push('/quote')
          console.log('click')
        }}
      >
        {textButton}
      </Button>
    </CardWrapper>
  )
}

export default Card
