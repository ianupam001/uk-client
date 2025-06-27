'use client';
import { useState } from 'react';
import './ServicesHubForm.css'; // or update the path to match your structure

export default function ServicesHubForm({serviceName}) {
  const [service, setService] = useState('Popular Services');
  const [vrn, setVrn] = useState('');
  const [location, setLocation] = useState('');

  return (
    <div className="services-hub">
      <h2 className="services-title">{serviceName}</h2>
      <div className="services-form">
        {/* Dropdown */}
        <div className="form-group">
          <label>I am looking for:</label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option>Popular Services</option>
            <option>Car MOT</option>
            <option>Servicing</option>
            <option>Tyres</option>
          </select>
        </div>

        {/* VRN Input */}
        <div className="form-group">
          <label>Your vehicle registration number</label>
          <div className="input-group">
            <span className="icon">🚗</span>
            <input
              type="text"
              placeholder="Enter your VRN"
              value={vrn}
              onChange={(e) => setVrn(e.target.value)}
            />
            <button>Search</button>
          </div>
        </div>

        {/* Location Input */}
        <div className="form-group">
          <label>Postcode or location</label>
          <div className="input-group">
            <span className="icon">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    width="50"
    height="50"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.5-7.5 11.25-7.5 11.25S4.5 18 4.5 10.5a7.5 7.5 0 1115 0z"
    />
  </svg>
</span>

            <input
              type="text"
              placeholder="Enter your postcode / Town"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <button>Search</button>
          </div>
        </div>

        {/* All Services Button */}
        <div className="form-group full-width">
          <button className="see-all-btn">See All Services</button>
        </div>
      </div>
    </div>
  );
}
