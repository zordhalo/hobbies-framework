import Link from 'next/link';
import styles from '../page.module.css';

export default function Philosophy() {
  return (
    <div className={styles.container}>
      <h2><i className="fas fa-bullseye"></i> The Philosophy Behind the Framework</h2>
      
      <div className={styles.highlightBox}>
        <h4>Core Principle</h4>
        <p>Hobbies create &quot;third spaces&quot;—environments beyond work and home where men develop identity, competence, and genuine fulfillment without performance pressure.</p>
      </div>

      <h3>Holistic Approach to Masculine Wellbeing</h3>
      <p>A balanced life addresses multiple interconnected domains: <strong>physical vitality</strong>, <strong>mental agility</strong>, <strong>emotional stability</strong>, and <strong>personal fulfillment</strong>.</p>
      
      <p>Modern men face unique pressures—career demands, societal expectations, and the challenge of maintaining authentic self-expression.</p>
      
      <p>This framework provides a systematic approach to reclaiming wellbeing through structured hobbies that create balance and meaning beyond professional achievement.</p>

      <h3>Why Men Need Structured Hobbies</h3>
      <p>Research shows that men often struggle with four key challenges:</p>
      <ul>
        <li><strong>Over-identification with work:</strong> Self-worth becomes tied to professional achievement</li>
        <li><strong>Limited emotional outlets:</strong> Fewer socially acceptable ways to process stress and emotions</li>
        <li><strong>Social isolation:</strong> Difficulty forming and maintaining meaningful friendships as adults</li>
        <li><strong>Burnout vulnerability:</strong> Lack of activities that genuinely restore energy</li>
      </ul>
      
      <p>Structured hobbies provide systematic relief from these challenges.</p>

      <div style={{ marginTop: '40px' }}>
        <Link href="/science" className={styles.btn} style={{ background: 'var(--color-primary)', color: 'white', marginRight: '15px' }}>
          Next: The Science →
        </Link>
        <Link href="/" className={`${styles.btn} ${styles.btnSecondary}`}>
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
