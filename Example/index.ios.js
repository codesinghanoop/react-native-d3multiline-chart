import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import Svg,{ Circle, Line, G, Path, Text, Rect } from 'react-native-svg'
import * as d3 from "d3";
import * as scale from 'd3-scale';
import _ from 'lodash'
import { MultiLineChart } from 'react-native-d3multipleline-chart'

var data =[ [{
    "y": "202",
    "x": 2000
}, {
    "y": "215",
    "x": 2001
}, {
    "y": "179",
    "x": 2002
}, {
    "y": "199",
    "x": 2003
}, {
    "y": "134",
    "x": 2003
}, {
    "y": "176",
    "x": 2010
}],
[{
    "y": "152",
    "x": 2000
}, {
    "y": "189",
    "x": 2002
}, {
    "y": "179",
    "x": 2004
}, {
    "y": "199",
    "x": 2006
}, {
    "y": "134",
    "x": 2008
}, {
    "y": "176",
    "x": 2010
}]
]

let leftAxisData = [
  134,144,154,164,174,184,194,204,215
]
let bottomAxisData = [
  2000,2002,2004,2006,2008,2010
]
let legendColor = ['#00b7d4','red']
let legendText = ['sales','year']
let minX= 2000, maxX= 2010
let minY= 134, maxY= 215

//since there are only two lines
var Color = ['#00b7d4','red']



export default class carouselapp extends Component {

  render() {
    return (
     <View style={styles.container}>
       <MultiLineChart data= {data} leftAxisData= {leftAxisData} bottomAxisData= {bottomAxisData} legendColor= {legendColor}
        legendText= {legendText} minX= {minX} maxX= {maxX} minY= {minY} maxY= {maxY} scatterPlotEnable= {false} dataPointsVisible= {true} Color= {Color} />
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Example', () => Example);
