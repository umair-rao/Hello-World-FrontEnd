import React from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';

const Greetings = ({
  greeting, loading, error, onRefresh,
}) => (
  <div className="App">
    <h2>Below are greetings fetched from the Rails API</h2>
    <button
      type="button"
      onClick={onRefresh}
    >
      Refresh
    </button>
    {loading && <p>Loading...</p>}
    {error && <p className="error-message">Start your Rails server in order to get the greetings</p>}
    {!loading && !error && <h1>{greeting}</h1>}
  </div>
);
};

export default Greetings;
