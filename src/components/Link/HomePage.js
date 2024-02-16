import React from 'react';

const concerts = [
  {
    date: 'JUL 16',
    location: 'Detroit, MI',
    venue: 'DTE Energy Music Theatre',
    link: 'BUY TICKETS',
  },
  {
    date: 'JUL 16',
    location: 'Detroit, MI',
    venue: 'DTE Energy Music Theatre',
    link: 'BUY TICKETS',
  },
  {
    date: 'JUL 16',
    location: 'Detroit, MI',
    venue: 'DTE Energy Music Theatre',
    link: 'BUY TICKETS',
  },
  {
    date: 'JUL 16',
    location: 'Detroit, MI',
    venue: 'DTE Energy Music Theatre',
    link: 'BUY TICKETS',
  },
  // Other concert objects...
];

const HomePage = () => {
  return (
    <div className="container">
      <h1 className="my-4 text-center">Tours</h1>
      <ul className="list-group">
        {concerts.map((concert, index) => (
          <li key={index} className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h5 className="mb-1">{concert.venue}</h5>
                <p className="mb-1">{concert.location}</p>
                <small>{concert.date}</small>
              </div>
              <a href="/" className="btn btn-primary">
                Buy Tickets
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
