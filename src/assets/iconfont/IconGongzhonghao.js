/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconGongzhonghao = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M484.8 332.5h198.7v198.7H484.8zM267.2 599.1h189.9v46.6H267.2zM267.2 675.4h435.6V722H267.2zM267.2 751.7h435.6v46.6H267.2z"
        fill={getIconColor(color, 0, '#009FE8')}
      />
      <Path
        d="M646.1 176.1c19.5 62.8 68.7 112.6 131.1 132.8v569.6H213.7V176.1h432.4M720.2 95H174.9c-23.3 0-42.2 18.9-42.2 42.2v780.1c0 23.3 18.9 42.2 42.2 42.2H816c23.3 0 42.2-18.9 42.2-42.2V235.8c-6.1 0.9-12.2 1.9-18.6 1.9-67.1 0-121.6-54.4-121.6-121.6 0.1-7.2 1-14.2 2.2-21.1z"
        fill={getIconColor(color, 1, '#009FE8')}
      />
      <Path
        d="M823.7 132.1m-70 0a70 70 0 1 0 140 0 70 70 0 1 0-140 0Z"
        fill={getIconColor(color, 2, '#009FE8')}
      />
    </Svg>
  );
};

IconGongzhonghao.defaultProps = {
  size: 18,
};

export default IconGongzhonghao;
