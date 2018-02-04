import React, {Component} from 'react';
import {Rect, G, Text, Circle} from 'react-native-svg';
import _ from 'lodash';

export default function createLegend (
  legendColor,
  legendText,
  width,
  margin,
  legendStyle,
  circleLegendType
) {
  let marginLegend = -100;
  var legendGroup;
  if (!circleLegendType) {
    legendGroup = _.map (legendColor, (d, i) => {
      marginLegend += 100;
      return (
        <G key={i}>
          <Rect
            width={legendStyle.width}
            fillOpacity={legendStyle.fillOpacity}
            height={legendStyle.height}
            x={(width / legendColor.length + marginLegend - 35) / 1.3}
            y={margin.top - 15}
            stroke={legendColor[i]}
            fill={legendColor[i]}
            strokeWidth={legendStyle.strokeWidth}
          />
          <Text
            textAnchor="middle"
            fontSize={legendStyle.legendFontSize}
            x={(width / legendColor.length + marginLegend - 3) / 1.3}
            y={margin.top - 15}
            fill={legendStyle.legentTextFill}
          >
            {legendText[i]}
          </Text>
        </G>
      );
    });
  } else {
    legendGroup = _.map (legendColor, (d, i) => {
      marginLegend += 100;
      return (
        <G key={i}>
          <Circle
            key={'circle_' + i}
            strokeWidth={2.5}
            stroke={legendColor[i]}
            fill={'white'}
            cx={(width / legendColor.length + marginLegend - 35) / 1.3}
            cy={margin.top - 15}
            r={4}
          />
          <Text
            fontSize={legendStyle.legendFontSize}
            x={(width / legendColor.length + marginLegend - 15) / 1.3}
            y={margin.top - 24}
            fill={legendStyle.legentTextFill}
          >
            {legendText[i]}
          </Text>
        </G>
      );
    });
  }

  return legendGroup;
}
