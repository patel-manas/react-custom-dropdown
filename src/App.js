import React from 'react';
import Dropdown from './Dropdown';
import './style.css';

let list = [
  {
    name: 'one',
    value: 1,
  },
  {
    name: 'two',
    value: 2,
  },
  {
    name: 'three',
    value: 3,
  },
];
export default function App() {
  return (
    <div>
      <Dropdown options={list} title={'Select a Value'} />
    </div>
  );
}
