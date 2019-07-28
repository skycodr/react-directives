import React, { Children } from 'react';
import { If, Else, ElseIf } from '.'

import { errorConstants as EC } from '../../constants';

export default function Check(props) {
    let renderable = null, i = 0;

    const elements = Children.toArray(props.children);

    while (i < elements.length) {
        const element = elements[i++];
        if (element.props.condition || element.type === Else) {
            renderable = element;
            break;
        }
    }

    return <>{renderable}</>;
}

Check.propTypes = {
    children: (props, key) => {

        let children = props[key];

        if (children === undefined) return EC.ERR_MUST_CONTAIN_AT_LEAST_AN_IF;
        else {

            const childElements = Children.toArray(children);
            const elementCount = childElements.length;
            const lastElementIndex = elementCount - 1;

            for (let index = 0; index < elementCount; index++) {
                let { type } = childElements[index];

                if (!(type === If || type === Else || type === ElseIf)) return EC.ERR_ONLY_IF_ELSE_ELSEIF_ALLOWED;
                else if (index === 0 && type !== If) return EC.ERR_FIRST_CHILD_SHOULD_BE_IF;
                else if (index > 0 && index === lastElementIndex && !(type === Else || type === ElseIf)) return EC.ERR_LAST_CHILD_SHOULD_BE_ELSE_OR_ELSEIF;
                else if (index > 0 && index < lastElementIndex && type !== ElseIf) return EC.ERR_ELSEIF_ALLOWED_BETWEEN_IF_ELSE;
            }
        }

        return null;
    }
}