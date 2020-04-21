/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconHuatongyuyin = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M511.3 725.3c-109.7 0-198.9-89.2-198.9-198.9V418.5c0-22.1 17.9-40 40-40s40 17.9 40 40v107.9c0 65.6 53.3 118.9 118.9 118.9S630.2 592 630.2 526.4V262.8c0-65.5-53.3-118.9-118.9-118.9s-118.9 53.3-118.9 118.9c0 22.1-17.9 40-40 40s-40-17.9-40-40c0-109.7 89.2-198.9 198.9-198.9s198.9 89.2 198.9 198.9v263.6c0 109.6-89.2 198.9-198.9 198.9z"
        fill={getIconColor(color, 0, '#009FE8')}
      />
      <Path
        d="M511.3 840.6c-193.7 0-351.4-142.4-351.4-317.5 0-22.1 17.9-40 40-40s40 17.9 40 40c0 131 121.7 237.5 271.3 237.5S782.6 654 782.6 523.1c0-22.1 17.9-40 40-40s40 17.9 40 40c0.1 175.1-157.6 317.5-351.3 317.5z"
        fill={getIconColor(color, 1, '#009FE8')}
      />
      <Path
        d="M511.3 922.2c-22.1 0-40-17.9-40-40v-81.5c0-22.1 17.9-40 40-40s40 17.9 40 40v81.5c0 22-17.9 40-40 40z"
        fill={getIconColor(color, 2, '#009FE8')}
      />
      <Path
        d="M618.8 959.6h-215c-22.1 0-40-17.9-40-40s17.9-40 40-40h215c22.1 0 40 17.9 40 40s-17.9 40-40 40z"
        fill={getIconColor(color, 3, '#009FE8')}
      />
    </Svg>
  );
};

IconHuatongyuyin.defaultProps = {
  size: 18,
};

export default IconHuatongyuyin;
