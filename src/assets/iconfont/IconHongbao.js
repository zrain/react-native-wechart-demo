/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconHongbao = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M509.2 605.6L388.6 502.8c-12.6-10.7-14.1-29.6-3.4-42.2 10.8-12.6 29.6-14.1 42.2-3.4l83.2 70.9 90.8-71.7c13-10.3 31.8-8 42.1 5s8 31.8-5 42.1L509.2 605.6z"
        fill={getIconColor(color, 0, '#009FE8')}
      />
      <Path
        d="M509.9 762.9c-16.5 0-29.9-13.4-29.9-29.9V571.1c0-16.5 13.4-29.9 29.9-29.9s29.9 13.4 29.9 29.9V733c0.1 16.5-13.3 29.9-29.9 29.9z"
        fill={getIconColor(color, 1, '#009FE8')}
      />
      <Path
        d="M594.9 704.4H422.2c-16.5 0-29.9-13.4-29.9-29.9s13.4-29.9 29.9-29.9h172.7c16.5 0 29.9 13.4 29.9 29.9 0.1 16.4-13.3 29.9-29.9 29.9zM596.1 631.4H423.3c-16.5 0-29.9-13.4-29.9-29.9s13.4-29.9 29.9-29.9h172.8c16.5 0 29.9 13.4 29.9 29.9s-13.4 29.9-29.9 29.9z"
        fill={getIconColor(color, 2, '#009FE8')}
      />
      <Path
        d="M850 959.6H173c-22.1 0-39.9-17.9-39.9-39.9V368.5c0-22.1 17.9-39.9 39.9-39.9s39.9 17.9 39.9 39.9v511.3H810V368.5c0-22.1 17.9-39.9 39.9-39.9s39.9 17.9 39.9 39.9v551.2c0.1 22-17.8 39.9-39.8 39.9z"
        fill={getIconColor(color, 3, '#009FE8')}
      />
      <Path
        d="M516 370c-116.9 0-227.9-44.6-312.4-125.7-30.9-29.6-48.6-72.2-48.6-116.9v-23.6c0-22.1 17.9-39.9 39.9-39.9H837c22.1 0 39.9 17.9 39.9 39.9v28.6c0 40.7-16.3 80.1-44.6 108C747.3 324 635 370 516 370zM236.3 143.7c3.1 16.7 11 31.8 22.5 42.9 69.5 66.7 160.9 103.5 257.1 103.5 97.9 0 190.4-37.9 260.3-106.7 10.6-10.4 17.6-24.5 19.9-39.8H236.3z"
        fill={getIconColor(color, 4, '#009FE8')}
      />
    </Svg>
  );
};

IconHongbao.defaultProps = {
  size: 18,
};

export default IconHongbao;
