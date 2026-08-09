import StudentCard from './StudentCard';

export default function StudentDirectory({ students }) {
  return (
    <div className="grid">
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}