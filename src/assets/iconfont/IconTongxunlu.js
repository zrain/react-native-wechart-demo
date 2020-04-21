/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconTongxunlu = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M419 530.7c-3.7 0-7.5-0.6-11.2-2-47.9-17.2-88.4-48.7-117-91-35.9-53-49-116.7-36.9-179.5C266 195.4 301.8 141 354.8 105.1 407.7 69.2 471.5 56 534.3 68.2c62.8 12.1 117.2 47.9 153.1 100.9 35.9 53 49 116.7 36.9 179.5-12.1 62.8-47.9 117.2-100.9 153.1-16.1 10.9-33.5 19.9-51.7 26.6-17.1 6.4-36.1-2.5-42.4-19.6-6.3-17.1 2.5-36.1 19.6-42.4 13.1-4.8 25.7-11.3 37.4-19.3 38.4-26 64.3-65.4 73.1-110.8 8.7-45.5-0.8-91.7-26.7-130-26-38.4-65.4-64.3-110.8-73-45.4-8.7-91.7 0.7-130 26.7-79.2 53.6-100 161.7-46.3 240.9 20.7 30.6 50 53.4 84.7 65.9 17.2 6.2 26.1 25.1 19.9 42.3-4.9 13.3-17.6 21.7-31.2 21.7zM109.2 959.6c-18.2 0-33-14.8-33-33 0-166.1 71.6-364.1 412.9-364.1 65.4 0 123.7 7.2 173.4 21.4 17.5 5 27.7 23.3 22.7 40.8-5 17.5-23.3 27.7-40.8 22.7-43.8-12.5-96.1-18.8-155.3-18.8-236.6 0-346.8 94.7-346.8 298 0 18.2-14.8 33-33.1 33zM684.8 758.9h260.5V825H684.8zM768.2 893.5h135.5v66.1H768.2zM726.5 636.5h177.2v66.1H726.5z"
        fill={getIconColor(color, 0, '#009FE8')}
      />
    </Svg>
  );
};

IconTongxunlu.defaultProps = {
  size: 18,
};

export default IconTongxunlu;