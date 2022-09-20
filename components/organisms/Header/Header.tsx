import Avatar from '@/components/atoms/Avatar'
import { Button } from '@/components/atoms/Button'
import Search from '@/components/atoms/Icon/Search'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.HeaderTop}>
        <Avatar src="/avatar.png" />

        <Button isIcon>
          <Search />
        </Button>
      </div>
      <div className={styles.HeaderBottom}>
        <p>Hello,</p>
        <h1>Juan Carlos</h1>
      </div>
    </div>
  )
}

export default Header
