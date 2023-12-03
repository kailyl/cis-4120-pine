import React from 'react';
import "../style/Tag.css"

const Tag = ({ name, onRemove }) => {
  return (
    <div className="tag">
      <span>{name}</span>
      <button onClick={() => onRemove(name)}><i className="fas fa-times"></i></button>
    </div>
  );
};

export default Tag;