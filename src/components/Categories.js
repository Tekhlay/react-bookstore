import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatusAction } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  return (
    <div className="categories">
      <h1>Categories</h1>
      <button type="button" onClick={() => dispatch(checkStatusAction())}>
        Check Status
      </button>
    </div>
  );
};

export default Categories;
