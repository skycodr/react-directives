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

import PropTypes from 'prop-types';

import { ElseIf, Else } from '.';

import { EC } from '../constants';
import { isBool } from '../helpers';

/**
 * Renders the children if condition passes.
 * 
 * @param {object} props Props to be passed.
 */
const If = ({ condition: con, children: ch }) => isBool(con) && con && ch ? ch : null;

If.propTypes = {
  condition: PropTypes.bool.isRequired,
  children: (props, key) => {
    let ch = props[key];
    let err = null;

    // Todo: check for single/multi child
    if (!!ch) ch.every && ch.every(({ type }) => !(err = ((type === Else || type === ElseIf) ? EC.ERR_IF_CANNOT_CONTAIN_ELSE_ELSEIF : null)));
    else err = EC.ERR_IF_MUST_CONTAIN_AT_LEAST_ONE_ELEMENT;

    return err;
  }
};

export default If;
