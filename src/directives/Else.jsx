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
import { If, ElseIf } from '.';

import { EC } from '../constants';

/**
 * If included, renders when all check fails.
 * @param {object} props Props to be passed.
 */
const Else = ({ children: ch }) => ch ?? null;

Else.propTypes = {
  children: (props, key) => {
    let ch = props[key];
    let err = null;

    // Todo: check single/multi child 
    if (!!ch) ch.every && ch.every(({ type }) => !(err = ((type === If || type === ElseIf) ? EC.ERR_ELSE_CANNOT_CONTAIN_IF_ELSEIF : null)));
    else err = EC.ERR_ELSE_MUST_CONTAIN_AT_LEAST_ONE_ELEMENT;

    return err;
  }
};

export default Else;
