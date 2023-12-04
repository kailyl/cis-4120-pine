import React, { useState } from 'react';
import Tag from './Tag';

const TagList = (props) => {

  return (
    <div className="tags-container">
      {props.interests.map(tag => (
        <Tag key={tag} name={tag} onRemove={() => props.removeTag(tag)} />
      ))}
    </div>
  );
};

export default TagList;
