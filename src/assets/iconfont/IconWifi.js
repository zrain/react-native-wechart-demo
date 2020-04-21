/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconWifi = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M63.3 339.1l78.6 90.9c112.9-61.8 237.3-98 369-98s256 36.3 368.9 98l78.6-90.9C823 256.7 672.4 206 510.9 206S198.8 256.7 63.3 339.1zM249.6 532.1l85.6 99c56.3-18.9 114.5-32.3 175.7-32.3 61.2 0 119.3 13.4 175.6 32.2l85.6-99c-81.9-36.3-169.1-59.2-261.2-59.2-92.2 0.1-179.4 23.1-261.3 59.3zM432.9 726.5l77.9 90.2 77.9-90.2c-25.7-4.5-51.2-9.6-77.9-9.6-26.6 0.1-52.2 5.2-77.9 9.6z"
        fill={getIconColor(color, 0, '#009FE8')}
      />
    </Svg>
  );
};

IconWifi.defaultProps = {
  size: 18,
};

export default IconWifi;
