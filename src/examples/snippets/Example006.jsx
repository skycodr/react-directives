import React from 'react';

import { Loop, Template } from '../../directives';
import { Code } from '../components';

import { getClass as gc } from '../../helpers';

import { DAYS_OF_WEEK } from '../constants';

export default () => {
  return (
    <>
      <div>{`Example: ${gc('Loop')}, ${gc('Template')} loop over []`}</div>
      <Code>
        {`<Loop over={DAYS_OF_WEEK}>
          <Template>
            {({ index, data }) => <div>{\`\${index + 1}. \${data}\`}</div>}
          </Template>
        </Loop>`}
      </Code>
      <Loop over={DAYS_OF_WEEK}>
        <Template>
          {({ index, data }) => <div>{`${index + 1}. ${data}`}</div>}
        </Template>
      </Loop>
    </>
  );
};