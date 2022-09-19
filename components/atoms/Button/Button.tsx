import styles from './Button.module.scss'
export const Button = ({ children }: Button) => {
  return (
    <button className={`${styles.Button} ${styles.Button_Purple}`}>
      {children}
    </button>
  )
}
