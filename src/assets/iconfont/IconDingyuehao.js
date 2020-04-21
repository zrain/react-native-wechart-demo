/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconDingyuehao = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M250.8 252.7h180.3v44.2H250.8zM250.8 325.2h413.8v44.2H250.8zM250.8 397.7h413.8v44.2H250.8z"
        fill={getIconColor(color, 0, '#009FE8')}
      />
      <Path
        d="M737 140.9v354.6c-4.5-0.2-9-0.3-13.5-0.3-164.5 0-298.3 133.8-298.3 298.3 0 4.9 0.1 9.8 0.4 14.6H201.8V140.9H737m36.9-77h-609c-22.1 0-40.1 18-40.1 40.1v741c0 22.1 18 40.1 40.1 40.1h357.3c-12.7-27.9-20-58.9-20-91.6 0-122.2 99.1-221.3 221.3-221.3 32.3 0 62.8 7.1 90.5 19.5V104c0-22.1-17.9-40.1-40.1-40.1z"
        fill={getIconColor(color, 1, '#009FE8')}
      />
      <Path
        d="M725.9 608.3c-97 0-175.6 78.6-175.6 175.6s78.6 175.6 175.6 175.6 175.6-78.6 175.6-175.6-78.6-175.6-175.6-175.6z m0 60.4c31.8 0 57.6 25.8 57.6 57.6s-25.8 57.6-57.6 57.6-57.6-25.8-57.6-57.6 25.8-57.6 57.6-57.6zM617.6 863.5c0-31.8 48.5-57.6 108.3-57.6s108.3 25.8 108.3 57.6H617.6z"
        fill={getIconColor(color, 2, '#009FE8')}
      />
    </Svg>
  );
};

IconDingyuehao.defaultProps = {
  size: 18,
};

export default IconDingyuehao;
