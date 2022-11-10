import React from 'react';
import Markdown from 'marked-react';

export function Preview({ initialText }) {
  const rerender = {
    link(href, text) {
      return `<a target="_blank" href=${href}>${text}</a>`;
    },
  };
  return (
    <>
      <div id="preview">
        <Markdown
          gfm={true}
          breaks={true}
          value={initialText}
          rerender={rerender}
        />
      </div>
    </>
  );
}
