/**
 * Copyright (c) by SkyCodr (aka: Dulan Sudasinghe)
 * 
 * License: MIT
 * 
 * Purpose:
 * 
 * This is an attempt to replicate *ngIf, *ngFor the React way. This also eliminates
 * the need for the multi level ternaries and map function. Key prop is automatically
 * injected where necessary.
 * 
 * Disclaimer:
 * 
 * This is runtime rendered content. Thus, will have minor performance degradation.
 * If you want compile time rendered content look for other libraries. Use at your
 * own risk.
 * 
 */

import { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

import { Template } from '.';

import { EC } from '../constants';
import { isFiniteLoop } from '../helpers';

/**
 * Loop over and render a give template. The directive achieves the following:
 * 1. Loop over={[...]} an array from={start} to={end} in step={stepBy} increments.
 * 2. Loop n times with setting to={end}
 * 3. Loop from={start} to={end}
 * 
 * NOTE:
 * The loop renders 1 less than what is specified in the 'to' field. As this
 * assumes 0 based indices. Infinite loops are ignored. And when traversing
 * arrays of x length and if to={y} where y > x then rest is filled with indices.
 * 
 * 
 * @param {object} props Props to be passed.
 */
const Loop = ({ children: tmpl, over, step, from, to = (over.length || 0), ...rest }) => {
  const getData = (i) => (over && over[i]) ?? i;

  let ch = null;

  if (isFiniteLoop(from, to, step) && tmpl?.type === Template && Children.count(tmpl) === 1) {
    ch = [];
    for (let i = from; step >= 0 ? i < to : i > to; i += step) ch.push(cloneElement(tmpl, { key: i, index: i, data: getData(i), ...rest }));
  }

  return ch;
};

Loop.propTypes = {
  from: PropTypes.number,
  to: PropTypes.number,
  step: PropTypes.number,
  over: PropTypes.array,
  children: (props, key) => {
    const ch = props[key];
    let err = !ch
      ? EC.ERR_LOOP_MUST_CONTAIN_AN_TEMPLATE_ELEMENT
      : Children.count(ch) > 1
        ? EC.ERR_LOOP_MUST_CONTAIN_ONLY_ONE_ELEMENT
        : ch.type !== Template
          ? EC.ERR_LOOP_ONLY_TEMPLATE_ELEMENT_ALLOWED
          : null;

    return err;
  }
};

Loop.defaultProps = {
  over: [],
  from: 0,
  step: 1,
};

export default Loop;

