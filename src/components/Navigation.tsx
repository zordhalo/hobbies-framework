'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <i className="fas fa-bolt"></i> Men&apos;s Wellbeing
        </Link>
        <button 
          className={styles.mobileMenuBtn} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <i className="fas fa-bars"></i>
        </button>
        <ul className={`${styles.navLinks} ${mobileMenuOpen ? styles.active : ''}`}>
          <li><Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
          <li><Link href="/philosophy" onClick={() => setMobileMenuOpen(false)}>Learn</Link></li>
          <li><Link href="/guide" onClick={() => setMobileMenuOpen(false)}>Get Started</Link></li>
          <li><Link href="/sources" onClick={() => setMobileMenuOpen(false)}>Sources</Link></li>
        </ul>
      </div>
    </nav>
  );
}
