/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconQiabao = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M821.1 828.7H102.5c-21.6 0-39.1-17.5-39.1-39.1V583.8c0-21.6 17.5-39.1 39.1-39.1s39.1 17.5 39.1 39.1v166.7h679.5c32.7 0 60.3-20.5 60.3-44.7V429.5H141.6V467c0 21.6-17.5 39.1-39.1 39.1S63.3 488.6 63.3 467v-76.6c0-21.6 17.5-39.1 39.1-39.1h818.1c21.6 0 39.1 17.5 39.1 39.1v315.4c0.1 67.8-62 122.9-138.5 122.9zM98.2 305L750.1 68.3l10 77.3-658.2 173.5zM819.7 333.8l-19.1-171.9-698.7 161.3 2.5 10.6z"
        fill={getIconColor(color, 0, '#009FE8')}
      />
    </Svg>
  );
};

IconQiabao.defaultProps = {
  size: 18,
};

export default IconQiabao;
