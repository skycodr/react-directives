import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';

export function Loop(props) {
    let renderable = [];
    let { over = [], from = 0, to = over.length, step = 1, children: template } = props;

    if (template) {
        for (let _i_ = from; _i_ < to; _i_ += step) {
            let data = over[_i_] || null;
            renderable.push(cloneElement(template, { key: _i_, index: _i_, data }));
        }
    }

    return <>{renderable}</>;
}

Loop.propTypes = {
    from: PropTypes.number,
    to: PropTypes.number,
    step: PropTypes.number,
    over: PropTypes.array,
    children: PropTypes.node.isRequired
};