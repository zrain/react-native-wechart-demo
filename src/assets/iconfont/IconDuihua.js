/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconDuihua = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M429.2 461.1h270.4v68.6H429.2zM515.8 600.9h140.6v68.6H515.8zM472.5 334.1h183.9v68.6H472.5z"
        fill={getIconColor(color, 0, '#009FE8')}
      />
      <Path
        d="M564.4 898.9c-116 0-224.7-50-300.4-137.6L68.5 729l94.9-115.6c12-14.6 33.7-16.8 48.3-4.7 14.6 12 16.8 33.6 4.7 48.3l-19.6 23.8L300.6 698l8.2 10.1c62.8 77.7 156 122.3 255.6 122.3C745.6 830.4 893 683 893 501.8S745.6 173.2 564.4 173.2c-162.1 0-298.5 115.9-324.3 275.6-3 18.7-20.5 31.5-39.3 28.4-18.7-3-31.4-20.6-28.4-39.3 31.2-193.1 196.1-333.3 392-333.3 219 0 397.1 178.2 397.1 397.2S783.4 898.9 564.4 898.9z"
        fill={getIconColor(color, 1, '#009FE8')}
      />
    </Svg>
  );
};

IconDuihua.defaultProps = {
  size: 18,
};

export default IconDuihua;
