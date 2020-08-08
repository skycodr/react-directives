import React from 'react';

import { Loop, Template, Check, If, Else } from '../../directives';
import { Code } from '../components';

import { getClass as gc } from '../../helpers';


export default () => {
  return (
    <>
      <div>{`Example: ${gc('Loop')}, ${gc('Template')} loop over [1, 2, 3....], with conditionals`}</div>
      <Code>
        {`<ul>
          <Loop over={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]}>
            <Template>
              {({ data }) => (
                <Check>
                  <If condition={data % 2 === 0}>
                    <li>{\`\${data} is even\`}</li>
                  </If>
                  <Else>
                    <li>{\`\${data} is odd\`}</li>
                  </Else>
                </Check>
              )}
            </Template>
          </Loop>
        </ul>`}
      </Code>
      <ul>
        <Loop over={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]}>
          <Template>
            {({ data }) => (
              <Check>
                <If condition={data % 2 === 0}>
                  <li>{`${data} is even`}</li>
                </If>
                <Else>
                  <li>{`${data} is odd`}</li>
                </Else>
              </Check>
            )}
          </Template>
        </Loop>
      </ul>
    </>
  );
};