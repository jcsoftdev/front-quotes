import Image from 'next/image'

import styles from './Avatar.module.scss'

const Avatar = ({ src }: Avatar) => {
  return (
    <div className={styles.Avatar}>
      <Image src={src} alt="avatar" width={'100%'} height={'100%'} />
    </div>
  )
}

export default Avatar
