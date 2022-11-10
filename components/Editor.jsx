import React from 'react';

export function Editor({ initialText, onChange }) {
  return (
    <textarea
      value={initialText}
      onChange={onChange}
      className="form-control"
      placeholder="Leave a comment here"
      id="editor"
    />
  );
}
