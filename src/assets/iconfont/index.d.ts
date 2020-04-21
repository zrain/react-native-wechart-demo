/* eslint-disable */

import { FunctionComponent } from 'react';
// Don't forget to install package: @types/react-native
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';

interface Props extends GProps, ViewProps {
  name: 'zhinanzhen' | 'tongxunlu' | 'jiahaoyou' | 'shezhi' | 'wo' | 'weizhi' | 'pinglun' | 'pengyouquan' | 'duihua' | 'saoyisao' | 'kanyikan' | 'yaoyiyao' | 'xiaolian' | 'piaoliuping' | 'gouwu' | 'youxi' | 'xiaochengxu' | 'souyisou' | 'qianbao' | 'shoucang' | 'tupian' | 'qiabao' | 'erweima' | 'huatongyuyin' | 'gongzhonghao' | 'wenjianchuansong' | 'weixinyundong' | 'zhifu' | 'labagonggao' | 'shoufukuan' | 'qunliao' | 'biaoqian' | 'dingyuehao' | 'paizhao' | 'shipin' | 'hongbao' | 'shuikeyikan' | 'tixingshuikan' | 'yongdiannaodengru' | 'sousuo' | 'miandarao' | 'zhiding' | 'biaoxing' | 'wifi' | 'fanhui' | 'weixin';
  size?: number;
  color?: string | string[];
}

declare const IconFont: FunctionComponent<Props>;

export default IconFont;
