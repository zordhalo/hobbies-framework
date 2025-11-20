import Link from 'next/link';
import styles from '../page.module.css';

export default function Science() {
  return (
    <div className={styles.container}>
      <h2><i className="fas fa-dna"></i> The Science: How Hobbies Transform Your Brain and Body</h2>
      
      <h3>Neurochemistry of Physical Activity</h3>
      <p>When you engage in physical hobbies, your brain undergoes profound chemical changes:</p>
      
      <h4>Endorphins</h4>
      <p>Natural opioids that reduce pain perception and create euphoria—the famous &quot;runner&apos;s high.&quot; Released during sustained moderate-to-vigorous exercise.</p>
      
      <h4>Dopamine</h4>
      <p>The motivation and reward neurotransmitter. Physical activity increases dopamine production and receptor sensitivity, improving mood, motivation, and executive function.</p>
      
      <h4>Serotonin</h4>
      <p>Regulates mood, sleep, and appetite. Exercise boosts serotonin synthesis and availability in the brain, contributing to long-term mood stability.</p>

      <div className={styles.highlightBox}>
        <p><strong>Clinical Evidence:</strong> Regular physical activity shows equivalent effectiveness to antidepressant medication for mild-to-moderate depression, with additional benefits and no side effects.</p>
      </div>

      <h3>Brain-Derived Neurotrophic Factor (BDNF)</h3>
      <p>BDNF is a protein that acts like fertilizer for your brain:</p>
      <ul>
        <li><strong>Promotes neuron growth:</strong> Supports creation of new brain cells (neurogenesis)</li>
        <li><strong>Strengthens connections:</strong> Makes synapses between neurons more robust</li>
        <li><strong>Protects existing neurons:</strong> Guards against cognitive decline</li>
        <li><strong>Enhances learning and memory:</strong> Facilitates acquisition of new information</li>
      </ul>

      <div style={{ marginTop: '40px' }}>
        <Link href="/guide" className={styles.btn} style={{ background: 'var(--color-primary)', color: 'white', marginRight: '15px' }}>
          Next: Find Your Hobbies →
        </Link>
        <Link href="/philosophy" className={`${styles.btn} ${styles.btnSecondary}`}>
          ← Back to Philosophy
        </Link>
      </div>
    </div>
  );
}
