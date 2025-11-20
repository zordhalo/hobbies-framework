import Link from 'next/link';
import styles from '../page.module.css';

export default function Success() {
  return (
    <div className={styles.container}>
      <h2><i className="fas fa-trophy"></i> Maintaining Consistency and Long-Term Success</h2>
      
      <h3>Building Sustainable Habits</h3>
      
      <h4>The Habit Loop</h4>
      <p>Every sustainable habit follows this pattern:</p>
      <div className={styles.pillarsContainer}>
        <div className={styles.pillarCard}>
          <h4>1. Cue/Trigger</h4>
          <p>A specific time, place, or preceding action</p>
          <p><em>Example:</em> &quot;After morning coffee&quot;</p>
        </div>
        <div className={styles.pillarCard}>
          <h4>2. Routine</h4>
          <p>The behavior itself</p>
          <p><em>Example:</em> &quot;15-minute walk&quot;</p>
        </div>
        <div className={styles.pillarCard}>
          <h4>3. Reward</h4>
          <p>Positive reinforcement</p>
          <p><em>Example:</em> &quot;Feel energized for the day&quot;</p>
        </div>
      </div>

      <h4>Identity-Based Habits</h4>
      <p>Shift from outcome-based to identity-based thinking:</p>
      <ul>
        <li>❌ &quot;I want to get fit&quot; → ✅ &quot;I&apos;m someone who moves daily&quot;</li>
        <li>❌ &quot;I should practice guitar&quot; → ✅ &quot;I&apos;m a musician&quot;</li>
        <li>❌ &quot;I need to reduce stress&quot; → ✅ &quot;I&apos;m someone who prioritizes wellbeing&quot;</li>
      </ul>

      <h3>Final Principles</h3>
      <div className={styles.pillarsContainer}>
        <div className={styles.pillarCard}>
          <h4>Consistency &gt; Intensity</h4>
          <p>Doing something small every day beats intense occasional effort</p>
        </div>
        <div className={styles.pillarCard}>
          <h4>Enjoyment &gt; Obligation</h4>
          <p>If you dread it, change it. Sustainable comes from genuine interest</p>
        </div>
        <div className={styles.pillarCard}>
          <h4>Progress &gt; Perfection</h4>
          <p>Missing sessions is normal. Just return to the schedule without guilt</p>
        </div>
        <div className={styles.pillarCard}>
          <h4>Process &gt; Outcome</h4>
          <p>Focus on showing up and enjoying the activity, not just results</p>
        </div>
      </div>

      <div className={styles.hero} style={{ marginTop: '60px' }}>
        <h2>Your Journey Starts Now</h2>
        <p>You now have a complete framework for transforming your work-life balance and mental health through structured hobbies. The science is clear, the philosophy is sound, and the implementation is practical.</p>
        <p><strong>The only thing left is to begin.</strong></p>
        <Link href="/" className={styles.btn} style={{ background: 'var(--color-primary)', color: 'white', marginTop: '20px' }}>
          Return to Home
        </Link>
      </div>
    </div>
  );
}
