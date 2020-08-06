import PropTypes from 'prop-types';

import { ElseIf, Else } from '.';

import { errorConstants as EC } from '../constants';
import { isBool } from '../helpers';

const If = ({ condition, children }) => isBool(condition) && condition && children ? children : null;

If.propTypes = {
  condition: PropTypes.bool.isRequired,
  children: (props, key) => {
    let children = props[key];
    let err = null;

    if (!!children) children.every && children.every(({ type }) => !(err = ((type === Else || type === ElseIf) ? EC.ERR_IF_CANNOT_CONTAIN_ELSE_ELSEIF : null)));
    else err = EC.ERR_IF_MUST_CONTAIN_AT_LEAST_ONE_ELEMENT;

    return err;
  }
};

export default If;
