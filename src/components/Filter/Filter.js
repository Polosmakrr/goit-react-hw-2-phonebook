import React from 'react';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <form>
      <label>
        Find contacts by name
        <br />
        <input type="text" value={value} onChange={e => onChangeFilter(e.target.value)}></input>
      </label>
    </form>
  );
};

export default Filter;
