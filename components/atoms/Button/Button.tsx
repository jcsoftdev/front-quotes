import styles from './Button.module.scss'
export const Button = ({
  children,
  className,
  disabled,
  isIcon,
  onClick,
}: Button) => {
  return (
    <button
      className={`${styles.Button} ${className || ''} ${styles.Button_Purple} ${
        isIcon ? styles.Button_Icon : ''
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
