import Link from 'next/link';
import styles from '../page.module.css';

export default function Guide() {
  return (
    <div className={styles.container}>
      <h2><i className="fas fa-search"></i> Step-by-Step Guide: Finding Your Hobbies</h2>
      
      <div className={styles.highlightBox}>
        <h4><span style={{ background: 'var(--color-primary)', color: 'white', padding: '5px 15px', borderRadius: '50%', marginRight: '10px' }}>1</span>Self-Assessment</h4>
        <p>Before selecting hobbies, understand yourself:</p>
        <ul style={{ textAlign: 'left', maxWidth: '800px', margin: '15px auto' }}>
          <li><strong>Energy patterns:</strong> Are you energized by people (extrovert) or solitude (introvert)?</li>
          <li><strong>Current interests:</strong> What do you naturally gravitate toward when you have free time?</li>
          <li><strong>Physical baseline:</strong> Current fitness level and any physical limitations</li>
          <li><strong>Schedule reality:</strong> Honest assessment of available time</li>
          <li><strong>Values alignment:</strong> Do you value competition, creativity, connection, mastery, adventure?</li>
        </ul>
      </div>

      <h3>Finding Your Physical Hobby</h3>
      <div className={styles.pillarsContainer}>
        <div className={styles.pillarCard}>
          <h4>Team Sports</h4>
          <p>Basketball, soccer, hockey, volleyball, ultimate frisbee</p>
          <p><em>Best for:</em> Social connection, competitive drive</p>
        </div>
        <div className={styles.pillarCard}>
          <h4>Individual Sports</h4>
          <p>Running, cycling, swimming, tennis, golf</p>
          <p><em>Best for:</em> Flexibility, personal pacing</p>
        </div>
        <div className={styles.pillarCard}>
          <h4>Martial Arts</h4>
          <p>Brazilian Jiu-Jitsu, boxing, Muay Thai, karate, judo</p>
          <p><em>Best for:</em> Discipline, practical skills, confidence</p>
        </div>
        <div className={styles.pillarCard}>
          <h4>Strength Training</h4>
          <p>Weightlifting, powerlifting, CrossFit, calisthenics</p>
          <p><em>Best for:</em> Measurable progress, physical transformation</p>
        </div>
      </div>

      <h3>Finding Your Mental/Creative Hobby</h3>
      <div className={styles.pillarsContainer}>
        <div className={styles.pillarCard}>
          <h4>Creative Arts</h4>
          <p>Painting, drawing, photography, pottery, digital art</p>
          <p><em>Best for:</em> Self-expression, visual thinking</p>
        </div>
        <div className={styles.pillarCard}>
          <h4>Music</h4>
          <p>Guitar, piano, drums, singing, music production</p>
          <p><em>Best for:</em> Emotional expression, creativity</p>
        </div>
        <div className={styles.pillarCard}>
          <h4>Strategic Games</h4>
          <p>Chess, poker, board games, strategy video games</p>
          <p><em>Best for:</em> Problem-solving, competition</p>
        </div>
        <div className={styles.pillarCard}>
          <h4>Making & Building</h4>
          <p>Woodworking, metalworking, electronics, model building</p>
          <p><em>Best for:</em> Hands-on creation, practical results</p>
        </div>
      </div>

      <div style={{ marginTop: '40px' }}>
        <Link href="/implementation" className={styles.btn} style={{ background: 'var(--color-primary)', color: 'white', marginRight: '15px' }}>
          Next: Implementation →
        </Link>
        <Link href="/science" className={`${styles.btn} ${styles.btnSecondary}`}>
          ← Back to Science
        </Link>
      </div>
    </div>
  );
}
