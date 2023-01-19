/* eslint-disable no-alert */
import React from 'react';

const Categories = () => {
  const handleClick = () => {
    alert('Page Under Construction');
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>Check status</button>
    </div>
  );
};

export default Categories;
