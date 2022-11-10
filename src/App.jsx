import React, { useState } from 'react';
import { Editor } from '../components/Editor';
import { Preview } from '../components/Preview';
import { Card } from '../components/Card/Card';
import './App.css';


const textInitial = `# Greetings Earthlings! 
  ## Welcome to my markdown previewer

  [freeCodeCamp](https://www.freecodecamp.org/)
  Front End Libraries Projects
  - Random Quote Machine
  - Markdown Previewer
  - Drum Machine
  - Javascript Calculator
  - Pomodoro Clock

  this is a **bold** text, an _emphasis_ , a _**combined emphasis**_ , and a ~~strikethrough~~

  Head 1 | Head 2 | Head 3
  ------ |--------| ------
  item1 | item2 | item3
  item4 | item5 | item6
  item7 | item8 | item9

  > example of blockquote

  Inline \`code\`
  \`\`\`

  // code block
  function sum (x, y) {
    return x + y;
  }

  \`\`\`
  ![Random Animals](https://loremflickr.com/320/240)
  `;
`;`;

export default function App() {
  const [initialText, setInitialText] = useState(textInitial);

  function handleText(e) {
    setInitialText(e.target.value);
  }

  return (
    <>
      <div className="App">
        <h1 className="App-title">Markdown</h1>
        <main className="App-content">
          <Card title="Editor">
            <Editor
              id="editor"
              initialText={initialText}
              onChange={(e) => handleText(e)}
            />
          </Card>
          <Card title="Preview">
            <Preview id="preview" initialText={initialText} />
          </Card>
        </main>
      </div>
    </>
  );
}
