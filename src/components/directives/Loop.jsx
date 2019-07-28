import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

import { errorConstants as EC } from '../../constants';

import { Template } from './';

export default function Loop(props) {
    let renderable = [];
    let { over = [], from = 0, to = over.length, step = 1, children: template } = props;

    if (template && Children.count(template) === 1 && template.type === Template) {
        for (let i = from; i < to; i += step) {
            let data = over[i] || i;
            renderable.push(cloneElement(template, { key: i, index: i, data }));
        }
    }

    return <>{renderable}</>;
}

Loop.propTypes = {
    from: PropTypes.number,
    to: PropTypes.number,
    step: PropTypes.number,
    over: PropTypes.array,
    children: (props, key) => {
        const children = props[key];
        if (children === undefined) return EC.ERR_LOOP_MUST_CONTAIN_AN_TEMPLATE_ELEMENT;
        else if(Children.count(children) > 1)  return EC.ERR_LOOP_MUST_CONTAIN_ONLY_ONE_ELEMENT;
        else if(children.type !== Template) return EC.ERR_LOOP_ONLY_TEMPLATE_ELEMENT_ALLOWED;

        return null;
    }

};