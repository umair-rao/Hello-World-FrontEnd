import React from 'react';
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

Greetings.propTypes = {
  greeting: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  onRefresh: PropTypes.func.isRequired,
};

export default Greetings;
