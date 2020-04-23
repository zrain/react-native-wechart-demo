// import { Dimensions, Platform } from 'react-native';

// // iPhoneX Xs
// const IPHONE_X_WIDTH = 375;
// const IPHONE_X_HEIGHT = 812;

// // iPhoneXR XsMax
// const IPHONE_XR_WIDTH = 414;
// const IPHONE_XR_HEIGHT = 896;

// // screen
// const SCREEN_WIDTH = Dimensions.get('window').width;
// const SCREEN_HEIGHT = Dimensions.get('window').height;

// //判断是否为iphoneX或Xs
// export const isIphoneX = () => {
//     return (
//         Platform.OS === 'ios' &&
//         ((SCREEN_HEIGHT === IPHONE_X_HEIGHT &&
//             SCREEN_WIDTH === IPHONE_X_WIDTH) ||
//             (SCREEN_HEIGHT === IPHONE_X_WIDTH &&
//                 SCREEN_WIDTH === IPHONE_X_HEIGHT))
//     );
// };

// //判断是否为iphoneXR或XsMAX
// export const isIphoneXR = () => {
//     return (
//         Platform.OS === 'ios' &&
//         ((SCREEN_HEIGHT === IPHONE_XR_HEIGHT &&
//             SCREEN_WIDTH === IPHONE_XR_WIDTH) ||
//             (SCREEN_HEIGHT === IPHONE_XR_WIDTH &&
//                 SCREEN_WIDTH === IPHONE_XR_HEIGHT))
//     );
// };
