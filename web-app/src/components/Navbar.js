// components/Navbar.js
import Link from 'next/link';
import styles from '@/css/navbar.css';



const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/top-albums">Top Albums</Link></li>
        <li><Link href="/top-artists">Top Artists</Link></li>
        <li><Link href="/events">Upcoming Events</Link></li>
        <li><Link href="/logout">Logout</Link></li>
      </ul>
    </nav>
  );
}
export default Navbar;
