import React, {Component} from 'react';
import Svg, {Circle, Line, G, Path, Text, Rect} from 'react-native-svg';
import {Animated} from 'react-native';

import AnimatedSvgFix from '../utils/AnimatedSVG';

const NativeSvgPath = Path;

class SvgPath extends Component {
  setNativeProps = (props = {}) => {
    this._component && this._component.setNativeProps (props);
  };
  render () {
    return (
      <G width={this.props.width} height={this.props.height}>
        <NativeSvgPath
          ref={component => (this._component = component)}
          {...this.props}
        />
      </G>
    );
  }
}
SvgPath = AnimatedSvgFix (SvgPath);
export default SvgPath;
