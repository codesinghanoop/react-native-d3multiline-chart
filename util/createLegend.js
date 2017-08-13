import React, { Component } from 'react'
import { Rect, G, Text } from 'react-native-svg'
import _ from 'lodash'

export default function createLegend(legendColor,legendText,width,margin,legendStyle){
  let marginLegend = -100
  var legendGroup = _.map(legendColor, (d,i) => {
                    marginLegend += 100;
                  return <G key= {i}>
                           <Rect 
                            width= {legendStyle.width}
                            fillOpacity= {legendStyle.fillOpacity}
                            height= {legendStyle.height}
                            x= {((width)/legendColor.length+marginLegend- 35)/1.3}  
                            y= {margin.top-15}
                            stroke= {legendColor[i]}
                            fill= {legendColor[i]}
                            strokeWidth= {legendStyle.strokeWidth} />
                            <Text
                             textAnchor= 'middle'
                             fontSize= {legendStyle.legendFontSize}
                             x= {((width)/legendColor.length+marginLegend-3)/1.3}
                             y= {margin.top-15}
                             fill= {legendStyle.legentTextFill}>
                             {legendText[i]}
                            </Text>
                         </G> 
  })

  return legendGroup
}