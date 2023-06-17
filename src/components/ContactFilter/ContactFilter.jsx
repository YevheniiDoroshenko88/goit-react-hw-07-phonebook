import React from 'react';
import { FilterDiv, FilterInput } from './ContactFilter.styled.jsx';
import { setFilter } from '../../redux/Filter/FilterSlice.jsx';
import { useDispatch } from 'react-redux';

export function ContactFilter() {
  const dispatch = useDispatch();
  const onChange = e => {
    dispatch(setFilter(e.target.value));
    console.log(e.target.value);
  };

  return (
    <FilterDiv>
      Filter
      <FilterInput type="text" name="filter" onChange={e => onChange(e)} />
    </FilterDiv>
  );
}
