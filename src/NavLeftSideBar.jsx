import styles from '../public/style.css';

function Nav (){
    return (
        <div classname = {styles.nav}>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Articles</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Affiliates</a></li>
                <li><a href="#">Archives</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}

export default Nav;