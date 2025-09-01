'use client';
                import { __makeTemplateObject, __rest, __assign } from 'D:\\kenneth\\00.dev\\02.prototype\\react-components-library-startermkdir\\node_modules\\tslib\\tslib.es6.js';
import React from 'react';
import styled from 'styled-components';
import styles from './FeButton.module.css.js';

var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: 10px;\n"], ["\n    padding: 10px;\n"])));
var FeButton = function (_a) {
  var _b = _a.primary,
    primary = _b === void 0 ? false : _b,
    _c = _a.size,
    size = _c === void 0 ? 'medium' : _c,
    backgroundColor = _a.backgroundColor,
    label = _a.label,
    props = __rest(_a, ["primary", "size", "backgroundColor", "label"]);
  var mode = primary ? styles['storybook-button--primary'] : styles['storybook-button--secondary'];
  console.log('styles : ', styles['storybook-button']);
  return React.createElement(Container, null, React.createElement("button", __assign({
    type: 'button',
    className: [styles['storybook-button'], styles["storybook-button--".concat(size)], mode].join(' '),
    style: {
      backgroundColor: backgroundColor
    }
  }, props), label));
};
var templateObject_1;

export { Container, FeButton };
