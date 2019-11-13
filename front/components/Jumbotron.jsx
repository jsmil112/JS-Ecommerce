import React from 'react';
import SearchBar from './SearchBar';

export default function Jumbotron({ handleChange, handleSubmit }) {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="text-center  brandLogo">JS</h1>
          <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}
