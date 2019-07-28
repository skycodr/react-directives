import React, { Children } from 'react';
import { If, ElseIf } from './'


import { errorConstants as Constants } from '../../constants';

export default function Else(props) {
    return <>{props.children}</>;
}

Else.propTypes = {
    children: (props, key) => {
        let children = props[key];

        if (children === undefined) return Constants.ERR_ELSE_MUST_CONTAIN_AT_LEAST_ONE_ELEMENT;
        else {
            const childElements = Children.toArray(children);
            const elementCount = childElements.length;

            for (let index = 0; index < elementCount; index++) {
                let { type } = childElements[index];
                if (type === If || type === ElseIf) return Constants.ERR_ELSE_CANNOT_CONTAIN_IF_ELSEIF;
            }
        }
        return null;
    }
}