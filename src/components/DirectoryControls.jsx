import styles from './DirectoryControls.module.css';

export default function DirectoryControls({ searchTerm, onSearchChange, statusFilter, onStatusFilterChange }) {
  function filterClass(value) {
    return statusFilter === value
      ? `${styles.filterButton} ${styles.activeFilter}`
      : styles.filterButton;
  }

  return (
    <div className={styles.controls}>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <button className={filterClass('all')} onClick={() => onStatusFilterChange('all')}>All</button>
      <button className={filterClass('deansLister')} onClick={() => onStatusFilterChange('deansLister')}>Dean's Listers</button>
      <button className={filterClass('probation')} onClick={() => onStatusFilterChange('probation')}>On Probation</button>
    </div>
  );
}
