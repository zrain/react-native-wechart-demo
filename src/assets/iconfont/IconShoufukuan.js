/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconShoufukuan = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M920 363.6c-22.3 0-40.3-18-40.3-40.3V261c0-42.6-34.7-77.3-77.3-77.3h-72.9c-22.3 0-40.3-18-40.3-40.3s18-40.3 40.3-40.3h72.9c87.1 0 157.9 70.9 157.9 157.9v62.3c0.1 22.3-18 40.3-40.3 40.3zM103.6 363.6c-22.3 0-40.3-18-40.3-40.3V261c0-87.1 70.9-157.9 157.9-157.9h87.5c22.3 0 40.3 18 40.3 40.3s-18 40.3-40.3 40.3h-87.5c-42.6 0-77.3 34.7-77.3 77.3v62.3c0.1 22.3-18 40.3-40.3 40.3zM308.8 919.4h-87.5c-87.1 0-157.9-70.9-157.9-157.9v-87.2c0-22.3 18-40.3 40.3-40.3s40.3 18 40.3 40.3v87.2c0 42.6 34.7 77.3 77.3 77.3h87.5c22.3 0 40.3 18 40.3 40.3 0 22.3-18.1 40.3-40.3 40.3zM802.4 919.4h-72.9c-22.3 0-40.3-18-40.3-40.3 0-22.3 18-40.3 40.3-40.3h72.9c42.6 0 77.3-34.7 77.3-77.3v-87.2c0-22.3 18-40.3 40.3-40.3 22.3 0 40.3 18 40.3 40.3v87.2c0.1 87.1-70.8 157.9-157.9 157.9zM521.7 537.4L356.4 396.6c-17-14.4-19-39.9-4.5-56.8 14.4-17 39.9-19 56.8-4.5l115 97.9L649 334.1c17.6-13.9 42.8-10.8 56.6 6.6 13.8 17.5 10.9 42.8-6.6 56.6L521.7 537.4z"
        fill={getIconColor(color, 0, '#009FE8')}
      />
      <Path
        d="M522.7 754c-22.3 0-40.3-18-40.3-40.3V491.1c0-22.3 18-40.3 40.3-40.3s40.3 18 40.3 40.3v222.6c0 22.2-18.1 40.3-40.3 40.3z"
        fill={getIconColor(color, 1, '#009FE8')}
      />
      <Path
        d="M639.5 673.5H402c-22.3 0-40.3-18-40.3-40.3s18-40.3 40.3-40.3h237.6c22.3 0 40.3 18 40.3 40.3s-18.1 40.3-40.4 40.3zM641.1 573.2H403.6c-22.3 0-40.3-18-40.3-40.3s18-40.3 40.3-40.3h237.6c22.3 0 40.3 18 40.3 40.3s-18.1 40.3-40.4 40.3z"
        fill={getIconColor(color, 2, '#009FE8')}
      />
    </Svg>
  );
};

IconShoufukuan.defaultProps = {
  size: 18,
};

export default IconShoufukuan;
