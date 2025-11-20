import Link from 'next/link';
import Card from '@/components/Card';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>The 3-Pillar Framework to Balance Work, Life & Mental Health</h1>
        <p>Science-backed. Men-focused. Proven to enhance wellbeing through physical hobbies, mental activities, and daily movement.</p>
        <div className={styles.heroButtons}>
          <Link href="/guide" className={`${styles.btn} ${styles.btnPrimary}`}>
            Take Assessment →
          </Link>
          <Link href="/philosophy" className={`${styles.btn} ${styles.btnSecondary}`}>
            Learn More
          </Link>
        </div>
      </section>

      {/* Highlight Stats */}
      <div className={styles.highlightBox}>
        <p><strong>81% of men see mental health benefits from physical activity</strong> — Canadian Mental Health Research, 2023</p>
      </div>

      {/* Three Pillars */}
      <h2>The Three-Pillar Framework</h2>
      <div className={styles.pillarsContainer}>
        <div className={`${styles.pillarCard} ${styles.physical}`}>
          <span className={`${styles.pillarBadge} ${styles.physicalBadge}`}>Physical</span>
          <h4><i className="fas fa-running"></i> Physical Hobby</h4>
          <p>Sports, martial arts, weightlifting, cycling, hiking</p>
          <p><strong>2-3 sessions/week</strong></p>
          <p><strong>30-60 min/session</strong></p>
        </div>
        <div className={`${styles.pillarCard} ${styles.mental}`}>
          <span className={`${styles.pillarBadge} ${styles.mentalBadge}`}>Mental</span>
          <h4><i className="fas fa-brain"></i> Mental/Creative Hobby</h4>
          <p>Chess, music, painting, writing, woodworking, puzzles</p>
          <p><strong>2-3 sessions/week</strong></p>
          <p><strong>Flexible duration</strong></p>
        </div>
        <div className={`${styles.pillarCard} ${styles.movement}`}>
          <span className={`${styles.pillarBadge} ${styles.movementBadge}`}>Daily</span>
          <h4><i className="fas fa-walking"></i> Daily Movement</h4>
          <p>Walking, stretching, yoga, mobility work</p>
          <p><strong>Every single day</strong></p>
          <p><strong>10-30 min/day</strong></p>
        </div>
      </div>

      {/* How It Works */}
      <h2>How It Works</h2>
      <div className={styles.stepsGrid}>
        <div className={styles.stepItem}>
          <div className={styles.stepNumber}>1</div>
          <h4>Assess</h4>
          <p>Understand your interests and baseline</p>
        </div>
        <div className={styles.stepItem}>
          <div className={styles.stepNumber}>2</div>
          <h4>Choose</h4>
          <p>Select your physical and mental hobbies</p>
        </div>
        <div className={styles.stepItem}>
          <div className={styles.stepNumber}>3</div>
          <h4>Schedule</h4>
          <p>Block time and build consistency</p>
        </div>
        <div className={styles.stepItem}>
          <div className={styles.stepNumber}>4</div>
          <h4>Thrive</h4>
          <p>Track progress and maintain long-term</p>
        </div>
      </div>

      {/* Explore Cards */}
      <h2 style={{ marginTop: '60px' }}>Explore the Framework</h2>
      <div className={styles.cardGrid}>
        <Card
          icon="fas fa-lightbulb"
          title="Philosophy & Science"
          description="Understand why this works: the psychology of third spaces, flow states, and brain chemistry"
          href="/philosophy"
        />
        <Card
          icon="fas fa-compass"
          title="Find Your Hobbies"
          description="Step-by-step self-assessment and hobby selection for your personality and lifestyle"
          href="/guide"
        />
        <Card
          icon="fas fa-calendar-check"
          title="Implementation Guide"
          description="Practical scheduling strategies, overcoming obstacles, and building sustainable habits"
          href="/implementation"
        />
      </div>

      {/* Final CTA */}
      <div className={`${styles.highlightBox} ${styles.ctaBox}`}>
        <h3>Backed by Science</h3>
        <p><strong>86 peer-reviewed studies</strong> from leading health organizations including APA, NIH, WHO, and CDC</p>
        <Link href="/sources" className={styles.btn}>
          View All Sources
        </Link>
      </div>
    </div>
  );
}

