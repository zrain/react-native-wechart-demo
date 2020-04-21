/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconLabagonggao = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M916.8 873.6c-4.7 0-9.5-0.8-14.1-2.4l-606-213.3H106.5c-23.5 0-42.5-19-42.5-42.5V362c0-23.5 19-42.5 42.5-42.5h189.1l347.3-131.8c21.8-8.4 46.5 2.7 54.8 24.7 8.3 22-2.7 46.5-24.7 54.8L311.3 404.4c-9.7 3.7-20.4 3.7-30 0.1H149v168.3h135.2c8.4-2.9 17.6-3.4 26.2-0.3l564 198.6V199l-65.7 22.3c-22.2 7.6-46.4-4.4-53.9-26.6-7.5-22.3 4.4-46.4 26.6-53.9l121.9-41.4c12.9-4.4 27.2-2.3 38.5 5.7 11.1 8 17.7 20.8 17.7 34.6v691.5c0 13.8-6.7 26.7-17.9 34.7-7.5 5-16.1 7.7-24.8 7.7z"
        fill={getIconColor(color, 0, '#009FE8')}
      />
      <Path
        d="M296.2 644.5c-17.6 0-31.9-14.3-31.9-31.9V364.7c0-17.6 14.3-31.9 31.9-31.9s31.9 14.3 31.9 31.9v247.9c0 17.6-14.3 31.9-31.9 31.9zM296.2 699h-65.1v228.8h142.5V741.7z"
        fill={getIconColor(color, 1, '#009FE8')}
      />
    </Svg>
  );
};

IconLabagonggao.defaultProps = {
  size: 18,
};

export default IconLabagonggao;
