import Articles from "./Articles";
import Footer from "./Footer";
import styles from "./Main.module.css";

export default function Main() {

    return (

        <main className={styles.content}>
            <Articles />
            <Footer />
        </main>

    );
}
