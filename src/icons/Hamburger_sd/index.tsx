import React from 'react';
import { IconProps } from '../types';

export default (({ width = '18px', height = '18px' }: IconProps) => (
  <svg viewBox="0 0 100 80" width={height} height={width}>
  <rect y="10" width="100" height="10"></rect>
  <rect y="40" width="100" height="10"></rect>
  <rect y="70" width="100" height="10"></rect>
</svg>
))
