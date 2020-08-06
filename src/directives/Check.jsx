
import { If, Else, ElseIf } from '.';

import { errorConstants as EC } from '../constants';

/**
 * The root container for conditional rendering using If, ElseIf, Else blocks.
 * This will group the conditional blocks.
 */
const Check = ({ children }) => {
  let elem = null;
  children && children.every && children.every((child) => !(elem = ((child.props.condition || child.type === Else) ? child : null)));
  return elem;
};

Check.propTypes = {
  children: (props, key) => {

    let children = props[key];
    let err = null;

    if (children) {
      const lastIndex = children.length - 1;
      /* 
      * Loop through all the children provided to the <Check />
      * They should be:
      * 
      * 1. <If />, <ElseIf />, <Else /> blocks.
      * 2. At least an <If /> block needs to be present.
      * 3. The 1 st block should be an <If />
      * 4. Other blocks can be <ElseIf /> or <Else />
      * 5. <Else /> block can only appear once and at the end only
      * 
      * The whole purpose of the following logic is to confuse the developer. LOL. ;p
      */
      children.every(({ type }, index) =>
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
    } else err = EC.ERR_MUST_CONTAIN_AT_LEAST_AN_IF;

    return err;
  }
};

export default Check;
