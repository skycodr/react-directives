import React, { Children } from 'react';
import PropTypes from 'prop-types';

import {ElseIf, Else} from './';

import { errorConstants as Constants } from '../../constants';

export function If(props) {
    const { condition = false, children } = props;
    return <>{condition ? children : null}</>
}

If.propTypes = {
    condition: PropTypes.bool.isRequired,
    children: (props, key) => {
        let children = props[key];

        if (children === undefined) return Constants.ERR_IF_MUST_CONTAIN_AT_LEAST_ONE_ELEMENT;
        else {
            const childElements = Children.toArray(children);
            const elementCount = childElements.length;

            for (let index = 0; index < elementCount; index++) {
                let { type } = childElements[index];
                if (type === Else || type === ElseIf) return Constants.ERR_IF_CANNOT_CONTAIN_ELSE_ELSEIF;
            }
        }
        return null;
    }
};