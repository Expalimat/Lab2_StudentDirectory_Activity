import { useState } from 'react';
export default function StudentForm({ onAdd }) {
const [name, setName] = useState('');
const [course, setCourse] = useState('');
const [yearLevel, setYearLevel] = useState('');
const [status, setStatus] = useState('Regular');
const [gwa, setGwa] = useState('');
function handleSubmit(e) {
e.preventDefault();
// TODO 5: build a student object from the five fields above,
// call onAdd(...) with it,
// then clear all five fields
}
return (
<form onSubmit={handleSubmit}>
{ /* TODO 6: one controlled input/select per field above, */ }
{ /* each with value={...} and onChange={(e) => set...(e.target.value)} */ }
<button type="submit">Add Student</button>
</form>
);
}
