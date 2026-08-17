import styles from './StudentCard.module.css';

export default function StudentCard({ student }) {
  const cardClass = student.status === 'On Probation'
    ? `${styles.card} ${styles.probation}`
    : styles.card;

  return (
    <div className={cardClass}>
      <h3>{student.name}</h3>
      <div>
        <p>{student.course} — Year {student.yearLevel}</p>
        <p>GWA: {student.gwa}</p>
        <p>{student.status}</p>
        {student.gwa <= 1.75 && <span className={styles.badge}>Dean's Lister</span>}
      </div>
    </div>
  );
}
