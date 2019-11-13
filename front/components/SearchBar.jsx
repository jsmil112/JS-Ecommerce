import React from 'react';

export default function SearchBar({ handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        className=" active-purple-3 active-purple-4 mb-4 form-control"
        type="text"
        placeholder="search"
        aria-label="Search"
        style={{ textAlign: 'center' }}
      />
    </form>
  );
}
