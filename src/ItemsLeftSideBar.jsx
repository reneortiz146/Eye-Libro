import styles from '../public/style.css';

function Items (){
    return (
        <div classname= {styles.hitems}>
            <h2>Top Articles</h2>
            <ul>
                <li><a href="#">Article top 1</a></li>
                <li><a href="#">Article top 2</a></li>
                <li><a href="#">Article top 3</a></li>
                <li><a href="#">Article top 4</a></li>
            </ul>
            <br />
            <h2>Links</h2>
            <ul>
                <li> <a href="http://www.solucija.com">solucija.com</a></li>
                <li> <a href="http://www.free-css-templates.com">free-css-templates.com</a></li>
            </ul>
        </div>
    )
}

export default Items;