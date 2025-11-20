import styles from './Card.module.css';
import Link from 'next/link';

interface CardProps {
  icon?: string;
  title: string;
  description: string;
  href?: string;
  onClick?: () => void;
}

export default function Card({ icon, title, description, href, onClick }: CardProps) {
  const CardContent = (
    <>
      {icon && (
        <div className={styles.cardIcon}>
          <i className={icon}></i>
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={styles.card}>
        {CardContent}
      </Link>
    );
  }

  return (
    <div className={styles.card} onClick={onClick}>
      {CardContent}
    </div>
  );
}
