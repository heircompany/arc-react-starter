import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/landing.css';

export default class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div id="landing-header">
          <h1 className="landing-title">Rozalado Services</h1>
          <Link
            to="/surveys"
            className="btn btn-large"
            style={{ backgroundColor: 'gray', marginRight: '24px' }}
          >
            Commercial
          </Link>
          <Link
            to="/surveys"
            className="btn btn-large"
            style={{ backgroundColor: 'gray', marginLeft: '24px' }}
          >
            Residential
          </Link>
        </div>

        <ul className="landing slideshow">
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
    );
  }
}
