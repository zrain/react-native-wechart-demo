/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconYouxi = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M419.1 766.3h-95.3c-19.7 0-35.6-15.9-35.6-35.6 0-19.7 15.9-35.6 35.6-35.6h95.3c19.7 0 35.6 15.9 35.6 35.6 0 19.6-15.9 35.6-35.6 35.6z"
        fill={getIconColor(color, 0, '#009FE8')}
      />
      <Path
        d="M371.5 813.9c-19.7 0-35.6-15.9-35.6-35.6V683c0-19.7 15.9-35.6 35.6-35.6s35.6 15.9 35.6 35.6v95.3c0 19.7-16 35.6-35.6 35.6z"
        fill={getIconColor(color, 1, '#009FE8')}
      />
      <Path
        d="M593.5 760.5m-29.9 0a29.9 29.9 0 1 0 59.8 0 29.9 29.9 0 1 0-59.8 0Z"
        fill={getIconColor(color, 2, '#009FE8')}
      />
      <Path
        d="M668.6 712.8m-29.9 0a29.9 29.9 0 1 0 59.8 0 29.9 29.9 0 1 0-59.8 0Z"
        fill={getIconColor(color, 3, '#009FE8')}
      />
      <Path
        d="M742.7 959.6H282.1c-75 0-136.1-61.1-136.1-136.1V430.9c0-19.7 15.9-35.6 35.6-35.6s35.6 15.9 35.6 35.6v392.5c0 35.8 29.1 64.9 64.9 64.9h460.6c35.7 0 64.9-29.1 64.9-64.9V200c0-35.8-29.1-64.9-64.9-64.9H282.1c-35.7 0-64.9 29.1-64.9 64.9v88.6c0 19.7-15.9 35.6-35.6 35.6s-35.6-16-35.6-35.6V200c0-75 61-136.1 136.1-136.1h460.6c75 0 136.1 61.1 136.1 136.1v623.5c0 75-61 136.1-136.1 136.1z"
        fill={getIconColor(color, 4, '#009FE8')}
      />
      <Path
        d="M739.9 572.9h-455V188.7h455v384.2z m-401.6-53.4h348.2V242.1H338.3v277.4z"
        fill={getIconColor(color, 5, '#009FE8')}
      />
    </Svg>
  );
};

IconYouxi.defaultProps = {
  size: 18,
};

export default IconYouxi;
