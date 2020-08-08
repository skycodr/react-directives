/**
 * Copyright (c) by SkyCodr (aka: Dulan Sudasinghe)
 * 
 * License: MIT
 * 
 * Purpose:
 * 
 * This is an attempt to replicate *ngIf, *ngFor the React way. This also eliminates
 * the need for the multi level ternaries and map function. Key prop is automatically
 * injected where necessary.
 * 
 * Disclaimer:
 * 
 * This is runtime rendered content. Thus, will have minor performance degradation.
 * If you want compile time rendered content look for other libraries. Use at your
 * own risk.
 * 
 */

import { Children, cloneElement } from "react";
import PropTypes from "prop-types";

import { EC } from "../constants";

import { isFunc } from "../helpers";

/**
 * Defines a template to be rendered in a loop.
 * 
 * @param {object} props Props to be passed
 */
const Template = (props) => {
  const { index, data, children: ch, level: lvl, itemRenderer: iRender } = props;
  const renderers = iRender ? iRender(props) : isFunc(ch) ? ch(props) : ch;
  return Children.map(renderers, (c, ci) => cloneElement(c, { key: `${lvl}_${index}_${ci}`, level: lvl, data, index }));
};


Template.propTypes = {
  data: PropTypes.any,
  level: PropTypes.number,
  index: PropTypes.number,
  children: (props, key) => {
    const ch = props[key];
    const iRender = props["itemRenderer"];
    let err = (ch || iRender) ? null : EC.ERR_TEMPLATE_MUST_CONTAIN_A_CHILD_COMPONENT;
    return err;
  },
  itemRenderer: (props, key) => {
    const iRender = props[key];
    const ch = props["children"];
    let err = (ch || iRender) ? null : EC.ERR_TEMPLATE_MUST_CONTAIN_A_CHILD_COMPONENT;
    return err;
  }
};

Template.defaultProps = {
  data: null,
  level: 0,
  index: 0
};

export default Template;
