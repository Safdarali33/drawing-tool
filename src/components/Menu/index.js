import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faEraser, faRotateLeft, faRotateRight, faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import styles from './index.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { menuItemClick, actionItemClick } from '@/slice/menuSlice'
import { MENU_ITEMS } from '@/constants'

const Menu = () => {
  const dispatch = useDispatch()

  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem)

  const handleMenuClick = (itemName) => {
    dispatch(menuItemClick(itemName))
  }

  return (
    <div className={styles.menuContainer}>
      <div className={`${styles.iconWrapper} ${activeMenuItem === MENU_ITEMS.PENCIL ? styles.active : ''}`} onClick={() => handleMenuClick(MENU_ITEMS.PENCIL)} >
        <FontAwesomeIcon icon={faPencil} className={styles.icon} />
      </div>
      <div className={`${styles.iconWrapper} ${activeMenuItem === MENU_ITEMS.ERASER ? styles.active : ''}`} onClick={() => handleMenuClick(MENU_ITEMS.ERASER)} >
        <FontAwesomeIcon icon={faEraser} className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faRotateLeft} className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faRotateRight} className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faFileArrowDown} className={styles.icon} />
      </div>
    </div>
  )
}

export default Menu;