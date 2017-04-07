import { Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 7,
  tinyMargin: 2,
  horizontalLineHeight: 1,
  iosStatusBarHeight: 20,
  androidStatusBarHeight: StatusBar.currentHeight,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54,
  customNavBarHeight: Platform.OS === 'ios' ? 64 + 50 + 20 : 54 + 50, // navBarTop height + navBarBottom height + status bar height (0 on android)
  customNavBarBottomHeight: 50,
  buttonRadius: 4,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 60,
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 300,
  },
};
