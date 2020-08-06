import { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

import { errorConstants as EC } from '../constants';
import { isFiniteLoop } from '../helpers';

import { Template } from '.';
/**
 * Loop over and render a give template. The directive achieves the following:
 * 1. Loop over={[...]} an array from={start} to={end} in step={stepBy} increments.
 * 2. Loop n times with setting to={end}
 * 3. Loop from={start} to={end}
 * 
 * NOTE: The loop renders 1 less than what is specified in the 'to' field. As this
 * assumes 0 based indices.
 * @param {*} props over, from, to, step, children
 * @default 
 * over=[]
 * from=0 
 * to=over.length || 0
 * step=1
 */
const Loop = (props) => {
  let { children: template, over = [], from = 0, to = (over.length || 0), step = 1, ...rest } = props;

  let childElements = null;

  if (template && Children.count(template) === 1 && template.type === Template) {
    if (isFiniteLoop(from, to, step)) {
      childElements = [];
      const getData = (v) => (over && over[v]) || v;

      for (let i = from; step >= 0 ? i < to : i > to; i += step) childElements.push(cloneElement(template, { key: i, index: i, data: getData(i), ...rest }));
    } else {
      console.error('Infinite loop');
    }
  }
  // If an array is present
  // If array is not present but from is present
  // If step is negative

  return childElements;
};

Loop.propTypes = {
  from: PropTypes.number,
  to: PropTypes.number,
  step: PropTypes.number,
  over: PropTypes.array,
  children: (props, key) => {
    const children = props[key];
    if (children === undefined) return EC.ERR_LOOP_MUST_CONTAIN_AN_TEMPLATE_ELEMENT;
    else if (Children.count(children) > 1) return EC.ERR_LOOP_MUST_CONTAIN_ONLY_ONE_ELEMENT;
    else if (children.type !== Template) return EC.ERR_LOOP_ONLY_TEMPLATE_ELEMENT_ALLOWED;

    return null;
  }
};

export default Loop;

