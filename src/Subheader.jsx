import styles from '../public/style.css';

function Subheader (){
    return (
        <div className={styles.padding}>
            <h2>What is sNews?</h2>
            sNews is a completly free <a href="http://www.php.net/">PHP</a> and <a href="http://www.mysql.com/">MySQL</a> driven tool for publishing and maintaining news articles on a website. Integrating sNews into your existing design is simple, but you could also use sNews on it's own, as a simple Content Management System. Consisting of only one file, sNews is extremely lightweight, very easy to install, and easy to use via a simple web interface.
        </div>
    )    
}

export default Subheader;