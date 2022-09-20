import styles from './CardWrapper.module.scss'

const CardWrapper = ({ children, className, withBoxShadow }: CardWrapper) => {
  return (
    <div
      className={`${styles.CardWrapper} ${className || ''} ${
        withBoxShadow && styles.CardWrapper_Shadow
      }`}
    >
      {children}
    </div>
  )
}

export default CardWrapper
