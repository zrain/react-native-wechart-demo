/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconXiaolian = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M333.5 411.4a35.4 67.6 0 1 0 70.8 0 35.4 67.6 0 1 0-70.8 0Z"
        fill={getIconColor(color, 0, '#009FE8')}
      />
      <Path
        d="M620.8 411.4a35.4 67.6 0 1 0 70.8 0 35.4 67.6 0 1 0-70.8 0Z"
        fill={getIconColor(color, 1, '#009FE8')}
      />
      <Path
        d="M512.6 807.2c-141.8 0-257.3-103.8-257.3-231.4 0-20.7 16.8-37.5 37.5-37.5h439.5c20.7 0 37.5 16.8 37.5 37.5 0 127.6-115.4 231.4-257.2 231.4z m-177-193.9c19.6 68.2 91.5 118.9 176.9 118.9s157.3-50.7 176.9-118.9H335.6z"
        fill={getIconColor(color, 2, '#009FE8')}
      />
      <Path
        d="M512.6 960.2c-247.2 0-448.3-201.1-448.3-448.3 0-48.8 7.8-96.9 23.2-142.8 6.6-19.6 27.8-30.1 47.5-23.6 19.6 6.6 30.2 27.9 23.6 47.5-12.8 38.2-19.3 78.2-19.3 118.9 0 205.9 167.5 373.3 373.3 373.3s373.3-167.5 373.3-373.3-167.5-373.3-373.3-373.3c-116.8 0-224.7 53.1-296 145.8-12.7 16.4-36.2 19.4-52.6 6.9-16.4-12.6-19.5-36.2-6.9-52.6C242.7 127.3 372.3 63.5 512.6 63.5c247.2 0 448.3 201.1 448.3 448.3S759.8 960.2 512.6 960.2z"
        fill={getIconColor(color, 3, '#009FE8')}
      />
    </Svg>
  );
};

IconXiaolian.defaultProps = {
  size: 18,
};

export default IconXiaolian;
