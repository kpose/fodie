import {Dimensions, PixelRatio} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
const camHeight=120;
const camHidth=160; 
const marginHedear=60;
const marginCam=8;

const heightTop = () => {
  const headerHeight = getStatusBarHeight() + marginHedear;
  return headerHeight;
};

const heightPanel = () => {
  const height =  camHeight+marginCam;
  return height;
};

const heightRullo = () => {
  const screenHeight = Dimensions.get('window').height;
  const height = screenHeight - (heightTop() + heightPanel() + marginCam);
  return height;
};

const widthPercentageToDP = (widthPercent) => {
  const screenWidth = Dimensions.get('window').width;
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

const heightPercentageToDP = (heightPercent) => {
  const screenHeight = Dimensions.get('window').height;
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

export {widthPercentageToDP, heightPercentageToDP,heightTop,heightPanel,heightRullo,camHeight,camHidth,marginCam};
