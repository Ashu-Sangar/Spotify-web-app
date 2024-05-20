import Link from 'next/link';
import styles from '@/css/navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/" className={styles.navLink}>Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/top-albums" className={styles.navLink}>Top Albums</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/top-artists" className={styles.navLink}>Top Artists</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/events" className={styles.navLink}>Upcoming Events</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/logout" className={styles.navLink}>Logout</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

