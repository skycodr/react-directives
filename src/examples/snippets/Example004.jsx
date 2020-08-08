import React from 'react';

import { Loop, Template } from '../../directives';
import { Code } from '../components';

import { getClass as gc } from '../../helpers';

export default () => {
  return (<>
    <div>{`Example: ${gc('Loop')}, ${gc('Template')} from=0 to=10. Auto keying`}</div>
    <Code>
      {`<Loop from={0} to={10}>
          <Template>
            <div>Loop de loop</div>
          </Template>
        </Loop>`}
    </Code>
    <Loop from={0} to={10}>
      <Template>
        <div>Loop de loop</div>
      </Template>
    </Loop>
  </>);
};