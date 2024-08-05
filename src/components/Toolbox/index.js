import { useSelector, useDispatch } from 'react-redux'
import styles from './index.module.css'
import { COLORS, MENU_ITEMS } from '@/constants'
import { changeBrushSize, changeColor } from '@/slice/toolboxSlice'
const Toolbox = () => {
    const dispatch = useDispatch()
    const activeMenuItem = useSelector((state) => state.menu.activeMenuItem)
    const showStrokeToolOption = activeMenuItem === MENU_ITEMS.PENCIL
    const showBrushToolOption = (activeMenuItem === MENU_ITEMS.PENCIL || activeMenuItem === MENU_ITEMS.ERASER)
    const {color, size} = useSelector((state) => state.toolbox[activeMenuItem])

    const updateBrushSize = (e) => {
        dispatch(changeBrushSize({item: activeMenuItem, size: e.target.value}))
    }

    const updateColor = (newColor) => {
        dispatch(changeColor({item: activeMenuItem, color: newColor}))
    }

    return (
        <div className={styles.toolboxContainer}>
            {showStrokeToolOption && <div className={styles.toolItem}>
                <h4 className={styles.toolText}>Stroke Color</h4>
                <div className={styles.itemContainer}>
                    <div className={`${styles.colorBox} ${color === COLORS.BLACK ? styles.active : ''}`} style={{backgroundColor: COLORS.BLACK}} onClick={() => updateColor(COLORS.BLACK)}></div>
                    <div className={`${styles.colorBox} ${color === COLORS.RED ? styles.active : ''}`} style={{backgroundColor: COLORS.RED}} onClick={() => updateColor(COLORS.RED)}></div>
                    <div className={`${styles.colorBox} ${color === COLORS.GREEN ? styles.active : ''}`} style={{backgroundColor: COLORS.GREEN}} onClick={() => updateColor(COLORS.GREEN)}></div>
                    <div className={`${styles.colorBox} ${color === COLORS.BLUE ? styles.active : ''}`} style={{backgroundColor: COLORS.BLUE}} onClick={() => updateColor(COLORS.BLUE)}></div>
                    <div className={`${styles.colorBox} ${color === COLORS.ORANGE ? styles.active : ''}`} style={{backgroundColor: COLORS.ORANGE}} onClick={() => updateColor(COLORS.ORANGE)}></div>
                    <div className={`${styles.colorBox} ${color === COLORS.YELLOW ? styles.active : ''}`} style={{backgroundColor: COLORS.YELLOW}} onClick={() => updateColor(COLORS.YELLOW)}></div>
                </div>
            </div>}
            
            {showBrushToolOption && <div className={styles.toolItem}>
                <h4 stylclassName={styles.toolText}>Brush size</h4>
                <div stylclassName={styles.itemContainer}>
                    <input type="range" min={1} max={10} step={1} value={size} onChange={updateBrushSize} />
                </div>
            </div>}
            
        </div>
    )
}

export default Toolbox