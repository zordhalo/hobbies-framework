import Link from 'next/link';
import styles from '../page.module.css';

export default function Implementation() {
  return (
    <div className={styles.container}>
      <h2><i className="fas fa-calendar-alt"></i> Implementation: Making It Work in Your Life</h2>
      
      <h3>Scheduling and Time Management</h3>
      
      <h4>The Calendar Block Method</h4>
      <p>Treat hobby time like important meetings—schedule them in advance:</p>
      <ul>
        <li><strong>Physical hobby:</strong> Block 2-3 specific time slots per week (e.g., Monday 6pm, Wednesday 6pm, Saturday 10am)</li>
        <li><strong>Mental hobby:</strong> Schedule 2-3 sessions (e.g., Tuesday 8pm, Thursday 8pm, Sunday 3pm)</li>
        <li><strong>Daily movement:</strong> Same time every day creates automaticity (e.g., 7am daily)</li>
      </ul>

      <div className={styles.highlightBox}>
        <p><strong>Pro Tip:</strong> Use recurring calendar events with notifications. Title them descriptively: &quot;Basketball pickup game&quot; not just &quot;Exercise.&quot; This creates psychological commitment and anticipation.</p>
      </div>

      <h4>Realistic Time Allocation</h4>
      <p>Weekly time commitment breakdown:</p>
      <ul>
        <li>Physical hobby: 2-3 hours/week (including travel time)</li>
        <li>Mental hobby: 2-3 hours/week</li>
        <li>Daily movement: 1-3.5 hours/week (10-30 min × 7 days)</li>
        <li><strong>Total: 5-10 hours/week</strong> (about 4-6% of your weekly hours)</li>
      </ul>

      <h3>Overcoming Common Obstacles</h3>
      
      <h4>&quot;I don&apos;t have time&quot;</h4>
      <p><strong>Reality check:</strong> The average person spends 3-4 hours daily on screens (social media, TV, gaming). This framework requires 40-90 minutes daily.</p>
      <p><strong>Solutions:</strong></p>
      <ul>
        <li>Track your time for one week—identify where time actually goes</li>
        <li>Replace one TV show or social media session with a hobby</li>
        <li>Choose hobbies with low setup time (running vs. golf)</li>
      </ul>

      <h4>&quot;I&apos;m too tired after work&quot;</h4>
      <p><strong>The paradox:</strong> Physical and engaging mental activities actually restore energy more than passive rest.</p>
      <p><strong>Solutions:</strong></p>
      <ul>
        <li>Morning hobbies before work (when energy is highest)</li>
        <li>Choose genuinely enjoyable activities—enjoyment overcomes fatigue</li>
        <li>Start with just 10 minutes—momentum builds energy</li>
      </ul>

      <div style={{ marginTop: '40px' }}>
        <Link href="/success" className={styles.btn} style={{ background: 'var(--color-primary)', color: 'white', marginRight: '15px' }}>
          Next: Long-Term Success →
        </Link>
        <Link href="/guide" className={`${styles.btn} ${styles.btnSecondary}`}>
          ← Back to Guide
        </Link>
      </div>
    </div>
  );
}
