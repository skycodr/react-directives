import React from 'react';
import { If, Else, Check } from '../../directives';

export const Item = ({ index, data }) => {
  const n = index + 1;
  return (
    <div>
      {n}. {data} and {n} is&nbsp;
      <Check>
        <If condition={n % 2 === 1}>Odd</If>
        <Else>Even</Else>
      </Check>
    </div>
  );
};