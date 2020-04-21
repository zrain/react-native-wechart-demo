/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconYongdiannaodengru = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M920.8 746h-819c-20.9 0-37.9-17-37.9-37.9V427c0-20.9 17-37.9 37.9-37.9s37.9 17 37.9 37.9v243.2h743.2V243.8H139.7v67.1c0 20.9-17 37.9-37.9 37.9s-37.9-17-37.9-37.9v-105c0-20.9 17-37.9 37.9-37.9h819c20.9 0 37.9 17 37.9 37.9v502.2c0 20.9-16.9 37.9-37.9 37.9z"
        fill={getIconColor(color, 0, '#009FE8')}
      />
      <Path
        d="M671 855.7H351.7c-11.4 0-21.7-6.8-26.1-17.3-4.5-10.5-2.2-22.6 5.6-30.8L433.5 701c5.4-5.6 12.8-8.7 20.5-8.7h114.6c7.7 0 15.1 3.1 20.5 8.7l102.4 106.6c7.9 8.2 10.1 20.4 5.6 30.8-4.4 10.5-14.7 17.3-26.1 17.3z m-252.6-56.8h185.9l-47.8-49.7h-90.4l-47.7 49.7z"
        fill={getIconColor(color, 1, '#009FE8')}
      />
    </Svg>
  );
};

IconYongdiannaodengru.defaultProps = {
  size: 18,
};

export default IconYongdiannaodengru;
