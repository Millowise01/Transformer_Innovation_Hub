import React from 'react';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Upcycling Workshop: Bottle to Lamp',
      date: '2025-02-15',
      time: '2:00 PM - 5:00 PM',
      location: 'Innovation Hub Studio',
      description: 'Learn how to transform plastic bottles into beautiful decorative lamps.'
    },
    {
      id: 2,
      title: 'Community Art Exhibition',
      date: '2025-02-28',
      time: '6:00 PM - 9:00 PM',
      location: 'Main Gallery',
      description: 'Showcase of sustainable art pieces created by our community members.'
    },
    {
      id: 3,
      title: 'Sustainable Living Seminar',
      date: '2025-03-10',
      time: '10:00 AM - 12:00 PM',
      location: 'Conference Room A',
      description: 'Expert talks on sustainable living practices and environmental impact.'
    }
  ];

  return (
    <div className="container">
      <h1>Upcoming Events</h1>
      <div className="events-list">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <div className="event-details">
              <p><i className="fas fa-calendar"></i> {event.date}</p>
              <p><i className="fas fa-clock"></i> {event.time}</p>
              <p><i className="fas fa-map-marker-alt"></i> {event.location}</p>
            </div>
            <p>{event.description}</p>
            <button className="button">Register Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;