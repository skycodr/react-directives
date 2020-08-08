import React from 'react';

import { Loop, Template } from '../../directives';
import { Code } from '../components';

import { getClass as gc } from '../../helpers';

export default () => {
  return (<>
    <div>{`Example: ${gc('Loop')}, ${gc('Template')} from={9} to={-1} step={-1}. Stepping down with itemRenderer`}</div>
    <Code>
      {`<Loop from={9} to={-1} step={-1}>
          <Template itemRenderer={({index}) => <div>{\`\${index + 1}. Loop de loop\`}</div>} />
        </Loop>`}
    </Code>
    <Loop from={9} to={-1} step={-1}>
      <Template itemRenderer={({index}) => <div>{`${index + 1}. Loop de loop`}</div>} />
    </Loop>
  </>);
};