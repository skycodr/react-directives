import { If, ElseIf } from '.';

import { errorConstants as EC } from '../constants';

const Else = ({ children }) => children ?? null;

Else.propTypes = {
  children: (props, key) => {
    let children = props[key];
    let err = null;

    if (!!children) children.every && children.every(({ type }) => !(err = ((type === If || type === ElseIf) ? EC.ERR_ELSE_CANNOT_CONTAIN_IF_ELSEIF : null)));
    else err = EC.ERR_ELSE_MUST_CONTAIN_AT_LEAST_ONE_ELEMENT;

    return err;
  }
};

export default Else;
