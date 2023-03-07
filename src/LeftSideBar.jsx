import Nav from './NavLeftSideBar';
import Items from './ItemsLeftSideBar';
import styles from '../public/style.css';

function LeftSideBar (){
    return (
        <div className={styles.left_side}>
            <Nav />
            <Items />
        </div>
    )
}

export default LeftSideBar;