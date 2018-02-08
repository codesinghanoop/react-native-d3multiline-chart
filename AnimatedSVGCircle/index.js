import React, {Component} from 'react';
import Svg, {Circle, Line, G, Path, Text, Rect} from 'react-native-svg';
import AnimatedSvgFix from '../utils/AnimatedSVG';

const NativeSvgCircle = Circle;

export const args = ['r', 'cx', 'cy'];

class SvgCircle extends Component {
  setNativeProps = props => {
    this._component && this._component.setNativeProps (props);
  };
  render () {
    return (
      <G width={this.props.width} height={this.props.height}>
        <NativeSvgCircle
          ref={component => (this._component = component)}
          {...this.props}
        />
      </G>
    );
  }
}
SvgCircle = AnimatedSvgFix (SvgCircle, {propString: args});
export default SvgCircle;
