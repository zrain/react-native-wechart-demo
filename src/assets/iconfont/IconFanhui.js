/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconFanhui = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M900.7 571.1h-485c-32.4 0-58.7-26.3-58.7-58.7s26.3-58.7 58.7-58.7h484.9c32.4 0 58.7 26.3 58.7 58.7s-26.2 58.7-58.6 58.7z"
        fill={getIconColor(color, 0, '#009FE8')}
      />
      <Path
        d="M334 838.4c-17.7 0-35.3-8-46.8-23.2l-211-278.4c-16.8-22.2-15.7-53.1 2.6-74.1l224-256c21.4-24.4 58.4-26.9 82.8-5.5 24.4 21.3 26.9 58.4 5.5 82.8L198.6 504l182.2 240.3c19.6 25.8 14.5 62.6-11.3 82.2-10.7 8-23.2 11.9-35.5 11.9z"
        fill={getIconColor(color, 1, '#009FE8')}
      />
    </Svg>
  );
};

IconFanhui.defaultProps = {
  size: 18,
};

export default IconFanhui;
