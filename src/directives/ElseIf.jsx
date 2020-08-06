import PropTypes from 'prop-types';
import { If, Else } from '.';

import { errorConstants as EC } from '../constants';
import { isBool } from '../helpers';

/**
 * <ElseIf /> block requires a condition and children to render
 * @param {Props} props Props passed to the 
 */
const ElseIf = ({ condition, children }) => isBool(condition) && condition && children ? children : null;

ElseIf.propTypes = {
  condition: PropTypes.bool.isRequired,
  children: (props, key) => {
    let children = props[key];
    let err = null;

    if (!!children) children.every && children.every(({ type }) => !(err = ((type === If || type === Else) ? EC.ERR_ELSEIF_CANNOT_CONTAIN_IF_ELSE : null)));
    else err = EC.ERR_ELSEIF_MUST_CONTAIN_AT_LEAST_ONE_ELEMENT;
    return err;
  }
};

export default ElseIf;