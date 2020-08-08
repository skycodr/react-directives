import React from 'react';

import { Check, If, Else } from '../../directives';

import { Code } from '../components';

import { getClass as gc } from '../../helpers';

export default () => {

  return (<>
    <div>{`Example: ${gc('If')}, ${gc('Else')}`}</div>
    <Code>
      {`<Check>
          <If condition={24 % 2 === 1}>
            24 is an odd number
          </If>
          <Else>
            24 is an even number
          </Else>
        </Check>`}
    </Code>
    <div>
      <Check>
        <If condition={24 % 2 === 1}>
          24 is an odd number
        </If>
        <Else>
          24 is an even number
        </Else>
      </Check>
    </div>
  </>);
};