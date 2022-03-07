import React, { useState } from 'react';

import './index.css';
const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const { options, title, multi } = props;

  const closeHandler = () => setIsOpen(!isOpen);
  return (
    <div className="dropdown__wrapper">
      <div className="dropdown__wrapper--header" onClick={closeHandler}>
        <span className="title">{title}</span>
        <span className="icon">{isOpen ? '^' : 'V'}</span>
      </div>
      <div className="dropdown__wrapper--list">
        {isOpen && (
          <ul>
            {options.map(({ name, value }) => (
              <li key={value}>
                {multi && (
                  <span>
                    <input type="checkbox" />
                  </span>
                )}
                {name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
