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
import { If, Else } from '.';

import { EC } from '../constants';
import { isBool } from '../helpers';

/**
 * This is similar to &lt;If /&gt;. However, cannot be present in a &lt;Check /&gt;
 * without an &lt;If /&gt; tag.
 * 
 * Renders the children if condition passes and if previous &lt;ElseIf /&gt;
 * fails.
 * 
 * @param {Props} props Props to be passed.
 */
const ElseIf = ({ condition: con, children: ch }) => isBool(con) && con && ch ? ch : null;

ElseIf.propTypes = {
  condition: PropTypes.bool.isRequired,
  children: (props, key) => {
    let ch = props[key];
    let err = null;

    // Todo: check single/multi child
    if (!!ch) ch.every && ch.every(({ type }) => !(err = ((type === If || type === Else) ? EC.ERR_ELSEIF_CANNOT_CONTAIN_IF_ELSE : null)));
    else err = EC.ERR_ELSEIF_MUST_CONTAIN_AT_LEAST_ONE_ELEMENT;
    return err;
  }
};

export default ElseIf;