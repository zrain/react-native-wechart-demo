/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconSousuo = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M866.6 959.6c-12.4 0-24.7-5.4-33-15.9l-197-247.2c-14.5-18.2-11.5-44.7 6.7-59.2 118.4-94.4 137.9-267.5 43.6-385.9-94.4-118.4-267.5-138-385.9-43.6-118.4 94.4-138 267.5-43.6 385.9C318.6 670.5 416.8 709 514.2 694c23-3.6 44.5 12.3 48 35.3 3.5 23-12.3 44.5-35.3 48C400 797 271.4 746.6 191.5 646.2c-59.7-75-86.7-168.7-75.9-263.9 10.7-95.2 58-180.6 132.9-240.3 154.7-123.2 381-97.8 504.3 57 114.3 143.5 100.5 348.7-25.6 476l172.3 216.2c14.5 18.2 11.5 44.7-6.7 59.2-7.7 6.2-17 9.2-26.2 9.2z"
        fill={getIconColor(color, 0, '#009FE8')}
      />
    </Svg>
  );
};

IconSousuo.defaultProps = {
  size: 18,
};

export default IconSousuo;
