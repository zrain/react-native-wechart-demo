/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconZhinanzhen = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M511.8 960.7C265 960.7 64.3 759.9 64.3 513.2c0-120 46.9-232.8 132-317.4 16.1-16 42.1-15.9 58.2 0.2 16 16.1 15.9 42.2-0.2 58.2-69.5 69.1-107.8 161.1-107.8 259.1 0 201.4 163.8 365.2 365.2 365.2s365.2-163.8 365.2-365.2c0-187.5-142-342.4-324.1-362.9v88.9c0 22.7-18.4 41.1-41.1 41.1-22.7 0-41.1-18.4-41.1-41.1V65.7h41.1c246.8 0 447.5 200.8 447.5 447.5S758.6 960.7 511.8 960.7z"
        fill={getIconColor(color, 0, '#009FE8')}
      />
      <Path
        d="M510 640.7c-4.9 0-9.9-0.3-14.9-0.9-33.4-3.9-63.3-20.6-84.1-47-43-54.4-33.8-133.7 20.7-176.8 54.4-43.1 133.7-33.8 176.8 20.7 43 54.4 33.8 133.7-20.7 176.8-22.5 17.8-49.7 27.2-77.8 27.2z m-0.4-177.1c-11.1 0-22.4 3.6-31.8 11-22.2 17.5-25.9 49.8-8.4 72 8.5 10.7 20.7 17.5 34.3 19.1 13.8 1.7 27-2.2 37.8-10.7 10.7-8.5 17.5-20.7 19.1-34.3 1.6-13.6-2.2-27-10.7-37.7-10.1-12.7-25.1-19.4-40.3-19.4z"
        fill={getIconColor(color, 1, '#009FE8')}
      />
      <Path
        d="M331.9 285.6L510 402.1l-112.4 84.1zM691.8 740.7l-72.3-200.1-107.8 89.9z"
        fill={getIconColor(color, 2, '#009FE8')}
      />
    </Svg>
  );
};

IconZhinanzhen.defaultProps = {
  size: 18,
};

export default IconZhinanzhen;
