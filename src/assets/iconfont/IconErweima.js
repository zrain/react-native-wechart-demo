/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconErweima = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M467.1 511.7H111.2C85.7 511.7 65 491 65 465.5V318.8c0-25.5 20.7-46.3 46.3-46.3s46.3 20.7 46.3 46.3v100.4H421V155.8H157.5v21.7c0 25.5-20.7 46.3-46.3 46.3S65 203.1 65 177.5v-67.9c0-25.5 20.7-46.3 46.3-46.3h355.9c25.6 0 46.3 20.7 46.3 46.3v355.9c-0.1 25.5-20.8 46.2-46.4 46.2z"
        fill={getIconColor(color, 0, '#009FE8')}
      />
      <Path
        d="M216.5 214.8h145.4v145.4H216.5zM909.5 959.6h-312c-25.6 0-46.3-20.7-46.3-46.3V601.4c0-25.5 20.7-46.3 46.3-46.3h312c25.6 0 46.3 20.7 46.3 46.3v311.9c-0.1 25.5-20.8 46.3-46.3 46.3zM643.8 867h219.4V647.6H643.8V867z"
        fill={getIconColor(color, 1, '#009FE8')}
      />
      <Path
        d="M701 704.8h105v105H701zM562.5 129.7h95.7v95.7h-95.7zM832.6 129.7h95.7v95.7h-95.7zM832.6 416.1h95.7v95.7h-95.7zM562.5 416.1h95.7v95.7h-95.7zM736.9 320.4h95.7v95.7h-95.7z"
        fill={getIconColor(color, 2, '#009FE8')}
      />
      <Path
        d="M562.5 224.7h270.1v95.7H562.5zM111.2 532h100.9v100.9H111.2zM396.1 532H497v100.9H396.1zM396.1 834H497v100.9H396.1zM111.2 834h100.9v100.9H111.2zM212.1 733.1h184V834h-184zM295.2 632.2h100.9v100.9H295.2z"
        fill={getIconColor(color, 3, '#009FE8')}
      />
    </Svg>
  );
};

IconErweima.defaultProps = {
  size: 18,
};

export default IconErweima;
