import { useState } from 'react';
import './NewEventFrom.css';

function NewEventFrom({ addEvent }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('Toronto');

  const resetForm = () => {
    setTitle('');
    setDate('');
    setLocation('Toronto');
  };

  const handleSubmit = e => {
    e.preventDefault();

    const event = {
      title: title,
      date: date,
      location: location,
      id: Math.floor(Math.random() * 10000)
    };

    addEvent(event);
    resetForm();
  };

  /*  const handleChange = e => {
    setTitle(e.target.value);
  };*/

  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event Title:</span>
        <input
          type="text"
          onChange={e => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Event Date:</span>
        <input
          type="date"
          onChange={e => setDate(e.target.value)}
          value={date}
        />
      </label>
      <label>
        <span>Event location</span>
        <select
          onChange={e => {
            setLocation(e.target.value);
          }}
        >
          <option value="toronto">Toronto</option>
          <option value="london">London</option>
          <option value="newmarket">Newmarket</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
}

export default NewEventFrom;
