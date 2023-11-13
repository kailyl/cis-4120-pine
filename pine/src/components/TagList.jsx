import React, { useState } from 'react';
import Tag from './Tag';

const TagList = () => {
  const [tags, setTags] = useState(['POLITICS', 'WORLD NEWS', 'EDUCATION', 'MEDIA', 'TECHNOLOGY', 'ARTS', 'HEALTH']);

  const handleRemoveTag = (tagNameToRemove) => {
    const updatedTags = tags.filter(tag => tag !== tagNameToRemove);
    setTags(updatedTags);
  };

  return (
    <div className="tags-container">
      {tags.map(tag => (
        <Tag key={tag} name={tag} onRemove={handleRemoveTag} />
      ))}
    </div>
  );
};

export default TagList;
