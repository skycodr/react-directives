import React from 'react';

const style = {
  backgroundColor: 'lightgray',
  borderRadius: '4px',
  border: '1px solid darkgray',
  tabSize: 1,
  tabWidth: 4,
  whiteSpace: 'pre-wrap'
};

export default ({ children }) => (
  <pre style={style}>
    <code>
      {`
        ${children}
      `}
    </code>
  </pre>
);
