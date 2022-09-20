import styles from './QuoteWrapper.module.scss'

const QuoteWrapper = ({ children, className }: QuoteWrapper) => {
  return (
    <div className={`${styles.Boxes} ${className || ''}`}>
      {new Array(4).fill(0).map((_, i) => (
        <div
          style={{ transform: `rotate(-${i * 5 + 8.35}deg)` }}
          key={i}
          className={styles.Box}
        />
      ))}
      {children}
    </div>
  )
}

export default QuoteWrapper
