import './App.css';
import React, { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';

function App() {
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: `mario's birthday bash`, id: 1 },
    { title: `luigi's live stream`, id: 2 },
    { title: `race on moo moo farm`, id: 3 }
  ]);

  console.log(showEvents);

  const handleClick = id => {
    setEvents(prevEvents => {
      return prevEvents.filter(event => {
        return event.id;
      });
    });
    console.log(id);
  };

  const subtitle = 'All the latest events in Mario land';

  return (
    <div className="App">
      <Title title="Events in Your Area" subtitle={subtitle} />

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>
      )}
      {showEvents &&
        events.map((event, index) => (
          <React.Fragment key={event.id}>
            <h2>
              {index} - {event.title}
            </h2>
            <button onClick={() => handleClick(event.id)}>delete event</button>
          </React.Fragment>
        ))}

      <Modal>
        <h2>Terms and Conditions</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
          dolores doloribus eaque eos incidunt modi molestias necessitatibus
          odit porro quae. Deserunt doloribus excepturi necessitatibus odio?
        </p>
      </Modal>
    </div>
  );
}

export default App;
