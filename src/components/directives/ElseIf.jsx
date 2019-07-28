import React, { Children } from 'react';
import PropTypes from 'prop-types';
import {If, Else} from './'

import { errorConstants as Constants } from '../../constants';

export default function ElseIf(props) {
    const { condition = false, children } = props;
    return <>{condition ? children : null}</>
}

ElseIf.propTypes = {
    condition: PropTypes.bool.isRequired,
    children: (props, key) => {
        let children = props[key];

        if (children === undefined) return Constants.ERR_ELSEIF_MUST_CONTAIN_AT_LEAST_ONE_ELEMENT;
        else {
            const childElements = Children.toArray(children);
            const elementCount = childElements.length;

            for (let index = 0; index < elementCount; index++) {
                let { type } = childElements[index];
                if (type === If || type === Else) return Constants.ERR_ELSEIF_CANNOT_CONTAIN_IF_ELSE;
            }
        }
        return null;
    }
};