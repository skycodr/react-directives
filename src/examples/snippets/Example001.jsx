import React from 'react';

import { Check, If } from '../../directives';
import { Code } from '../components';

import { getClass as gc } from '../../helpers';

export default () => {

  return (<>
    <div>Example: {`${gc('If')}`}</div>
    <Code>
      {`<Check>
          <If condition={23 % 2 === 1}>
            Yes 23 is an odd number
          </If>
        </Check>`}
    </Code>
    <div>
      <Check>
        <If condition={23 % 2 === 1}>
          Yes 23 is an odd number
        </If>
      </Check>
    </div>
  </>);
};