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

import { If, Else, ElseIf } from '.';

import { EC } from '../constants';

/**
 * The root container for conditional rendering using If, ElseIf, Else blocks.
 * This will group the conditional blocks.
 * 
 * The &lt;Check /&gt; should be:
 * 
 * 1. &lt;If /&gt;, &lt;ElseIf /&gt;, &lt;Else /&gt; blocks.
 * 2. At least an &lt;If /&gt; block needs to be present and can only have one on the first block.
 * 3. Other blocks can be &lt;ElseIf /&gt; or &lt;Else /&gt;.
 * 4. &lt;Else /&gt; block can only appear once as the last block.
 * 
 * @param {object} props Props for the component
 */
const Check = ({ children: ch }) => ch?.length
  ? ch.reduce((ac, cc) => ac?.props?.condition ? ac : (cc?.props?.condition || cc?.type === Else) ? cc : null)
  : (ch?.type === If && ch?.props.condition) ? ch : null;


Check.propTypes = {
  children: (props, key) => {
    const ch = props[key];
    const lastIndex = ch?.length ? ch.length - 1 : -1;
    let err = null;

    if (ch?.length) {
      ch.every(({ type }, index) =>
        !(err = (!(type === If || type === ElseIf || type === Else))
          ? EC.ERR_ONLY_IF_ELSE_ELSEIF_ALLOWED
          : (index === 0 && type !== If)
            ? EC.ERR_FIRST_CHILD_SHOULD_BE_IF
            : (index > 0 && index < lastIndex && type !== ElseIf)
              ? EC.ERR_ELSEIF_ALLOWED_BETWEEN_IF_ELSE
              : (index > 0 && index === lastIndex && !(type === ElseIf || type === Else))
                ? EC.ERR_LAST_CHILD_SHOULD_BE_ELSE_OR_ELSEIF
                : null)
      );
    } else if (ch?.type !== If) err = EC.ERR_MUST_CONTAIN_AT_LEAST_AN_IF;

    return err;
  }
};

export default Check;
