# 项目说明

## iconfont

> https://github.com/iconfont-cli/react-native-iconfont-cli
> 更新 iconfont 图标后，本地执行 npx iconfont-rn
> 配置文件 iconfont.json
> 输出位置 ./src/assets/iconfont

## 自适应键盘滚动

### KeyboardAvoidingView

> SafeAreaView 的时候有问题，显示总是少一块，api 中又缺少动态的支持

### KeyboardAwareScrollView

> 长 Form 表单需要滚动的情况，支持情况较全

### Animated & Animated.View

> 最为灵活，切效果可动态调配
> 适合对灵活度要求较高的情况
> UI 展示性能上需要优化

### 打包测试

> https://somychfudewe.github.io/2019/06/25/React-Native%E6%89%93%E5%8C%85ipa%E5%AE%8C%E6%95%B4%E6%B5%81%E7%A8%8B(Ad-Hoc)/

### 关于模拟 keyboard 弹出动画

> http://leavez.xyz/2017/03/20/animation-curve/ > https://reactnative.dev/docs/animated#spring

```javascript
// const { UIManager } = NativeModules;
// if (Platform.OS === 'android') {
//     if (UIManager.setLayoutAnimationEnabledExperimental) {
//         UIManager.setLayoutAnimationEnabledExperimental(true);
//     }
// }

// const EasingKeyboard = Easing.bezier(0.38, 0.7, 0.125, 1.0);
// const EasingKeyboard = Easing.bezier(0.1, 0.76, 0.55, 0.9);
// const EasingKeyboard = Easing.bezier(0.17, 0.59, 0.4, 0.77);

// Animated.parallel([
//     Animated.timing(this.keyboardHeight, {
//         duration: event.duration,
//         toValue: 0,
//         useNativeDriver: false
//     }),
//     Animated.timing(this.marginHeight, {
//         duration: event.duration,
//         toValue: 0,
//         useNativeDriver: false
//     })
// ]).start();

// Animated.parallel([
//     Animated.timing(this.keyboardHeight, {
//         duration: event.duration,
//         easing: EasingKeyboard,
//         toValue: event.endCoordinates.height,
//         useNativeDriver: false
//     }),
//     Animated.timing(this.marginHeight, {
//         duration: event.duration,
//         easing: EasingKeyboard,
//         toValue:
//             event.endCoordinates.screenY -
//             event.startCoordinates.screenY,
//         useNativeDriver: false
//     })
// ]).start();
```

### 页面中的 tabs

### 调用硬件、照相机、相册等
