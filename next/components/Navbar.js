import Link from "next/link";
import styles from '@/styles/navbar.module.css'
export default function Navbar() {
  return (
    <>
      <nav className={styles.btn_list}>

          <Link className={styles.navbar_btn} href="/">
            Project List
          </Link>


          <Link className={styles.navbar_btn} href="/game/info">
            About Project
          </Link>


          <Link className={styles.navbar_btn} href="/game/Match_card">
            Card Matching
          </Link>

          

      </nav>
    </>
  );
}
