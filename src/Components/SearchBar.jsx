import React from "react";

export default function SearchBar({ onSubmit, onChange, value }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        placeholder="Enter a meal"
        onChange={onChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}
