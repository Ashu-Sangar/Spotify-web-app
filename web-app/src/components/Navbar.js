// components/Navbar.js
import Link from 'next/link';
import styles from '@/css/navbar.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><Link href="/">Home</Link></li>
        <li className={styles.navItem}><Link href="/top-albums">Top Albums</Link></li>
        <li className={styles.navItem}><Link href="/top-artists">Top Artists</Link></li>
        <li className={styles.navItem}><Link href="/events">Upcoming Events</Link></li>
        <li className={styles.navItem}><Link href="/logout">Logout</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
