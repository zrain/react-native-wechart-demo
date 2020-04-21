/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconZhiding = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M576.8 144.1h382.6v79.5H576.8zM699.8 759.8h259.6v79.5H699.8zM711.3 349.4h248v79.5h-248zM806 554.6h153.3v79.5H806zM496.8 936.3H279.5c-22 0-39.8-17.8-39.8-39.8V733.9H103.1c-13.8 0-26.6-7.1-33.8-18.8-7.2-11.7-7.9-26.3-1.8-38.6L352.6 104c13.5-27 57.7-27 71.2 0l285.1 572.4c6.1 12.3 5.4 27-1.8 38.6-7.3 11.7-20 18.8-33.8 18.8H536.6v162.6c0 22.2-17.8 39.9-39.8 39.9z m-177.5-79.5h137.8V694.2c0-22 17.8-39.8 39.8-39.8H609L388.2 210.9 167.3 654.4h112.2c22 0 39.8 17.8 39.8 39.8v162.6z"
        fill={getIconColor(color, 0, '#009FE8')}
      />
    </Svg>
  );
};

IconZhiding.defaultProps = {
  size: 18,
};

export default IconZhiding;
