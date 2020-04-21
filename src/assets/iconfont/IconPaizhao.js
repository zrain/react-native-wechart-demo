/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconPaizhao = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M749.6 306.1h210.7v53.7H749.6z"
        fill={getIconColor(color, 0, '#009FE8')}
      />
      <Path
        d="M828.1 227.6h53.7v210.7h-53.7z"
        fill={getIconColor(color, 1, '#009FE8')}
      />
      <Path
        d="M858.5 854.8H99.1c-19.8 0-35.8-16-35.8-35.8V301.9c0-19.8 16-35.8 35.8-35.8h200.3l38.5-64.1c10.2-21.4 31.6-35 55.5-35h170.8c23.9 0 45.3 13.6 55.5 35l38.5 64.1H689c19.8 0 35.8 16 35.8 35.8s-16 35.8-35.8 35.8h-51c-12.6 0-24.2-6.6-30.7-17.4l-49.1-81.7H399.5l-49.1 81.7c-6.5 10.8-18.1 17.4-30.7 17.4H135v445.5h687.8V510.9c0-19.8 16-35.8 35.8-35.8s35.8 16 35.8 35.8V819c-0.1 19.8-16.1 35.8-35.9 35.8z"
        fill={getIconColor(color, 2, '#009FE8')}
      />
      <Path
        d="M478.8 719.9c-94.6 0-171.5-76.9-171.5-171.5s76.9-171.5 171.5-171.5 171.5 76.9 171.5 171.5-76.9 171.5-171.5 171.5z m0-271.3c-55.1 0-99.9 44.8-99.9 99.9s44.8 99.9 99.9 99.9 99.9-44.8 99.9-99.9-44.8-99.9-99.9-99.9zM244.9 413.8h-59c-9.9 0-17.9-8-17.9-17.9 0-9.9 8-17.9 17.9-17.9h59c9.9 0 17.9 8 17.9 17.9 0 9.9-8 17.9-17.9 17.9z"
        fill={getIconColor(color, 3, '#009FE8')}
      />
    </Svg>
  );
};

IconPaizhao.defaultProps = {
  size: 18,
};

export default IconPaizhao;
