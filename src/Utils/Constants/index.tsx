import {heightPercentageToDP} from '../Helper/responsive';

export const HEADER_MAX_HEIGHT = heightPercentageToDP(8);
export const HEADER_MIN_HEIGHT = heightPercentageToDP(5);
export const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
