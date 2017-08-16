# react-native-d3multiline-chart
Android and iOS multiline/line/scatterPoint chart based on d3.js

**Getting Started**

 - Step 1- npm install react-native-d3multiline-chart --save or yarn add react-native-d3multiline-chart --save
 - Step 2- react-native link react-native-svg
 - Step 3- Build the project and watch the beauty.
 
----------

**Try the example app**

![](https://github.com/codesinghanoop/react-native-d3multiline-chart/blob/master/Images/example.png)

**Usage**
Note: In case of any misunderstanding please go through the example.

    import { MultiLineChart } from 'react-native-d3multiline-chart'
    //default data is available 
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
    //default data is available 
    let leftAxisData = [
      134,144,154,164,174,184,194,204,215
    ]
    //default data is available 
    let bottomAxisData = [
      2000,2002,2004,2006,2008,2010
    ]
    let legendColor = ['#00b7d4','red']
    let legendText = ['sales','year']
    let minX= 2000, maxX= 2010
    let minY= 134, maxY= 215

    //since there are only two lines
    var Color = ['#00b7d4','red']

    render() {
        return (
         <View style={styles.container}>
           <MultiLineChart data= {data} leftAxisData= {leftAxisData} bottomAxisData= {bottomAxisData} legendColor= {legendColor}
            legendText= {legendText} minX= {minX} maxX= {maxX} minY= {minY} maxY= {maxY} scatterPlotEnable= {false}   dataPointsVisible= {true} Color= {Color} />
         </View>
        );
      }
    }

----------

**Features**

 -  Add line graph,multiline graph and scatter point graph (by enabling scatterPlotEnable)

 -  Desired color to the lines as well as the data points, data points are apperaring at perfect positions with perfect fill color and highlight of radius is working fine, these functionality is not appropriately provided by react-native-charts and  react-native-pathjs-charts
 
 -  Legends are available in the chart, this is the missing feature in [react-native-charts](https://github.com/tomauty/react-native-chart) and [react-native-pathjs-charts](https://github.com/capitalone/react-native-pathjs-charts).
 
 -  [https://github.com/capitalone/react-native-pathjs-charts/issues/40](https://github.com/capitalone/react-native-pathjs-charts/issues/40) enhancement is added in this library.
 
**Properties**


|  Name         | Type          |
| ------------- |:-------------:| 
| data   | PropTypes.array|
| leftAxisData      | propTypes.array |
| bottomAxisData      | propTypes.array |
| legendColor      | propTypes.array |
| legendText      | propTypes.array |
| minX      | propTypes.number |
| minY      | propTypes.number |
| maxX      | propTypes.number |
| maxY      | propTypes.number |
| scatterPlotEnable | propTypes.bool |
| dataPointsVisible | propTypes.bool |
| hideAxis | propTypes.bool |
| hideXAxisLabels | propTypes.bool |
| hideYAxisLabels | propTypes.bool |
| showLegends | propTypes.bool |
| axisColor | propTypes.string |
| axisLabelColor | propTypes.string |
| axisLineWidth | propTypes.number |
| chartFontSize | propTypes.number |
| Color | propTypes.array |
| chartHeight | propTypes.number |
| chartWidth | propTypes.number |
| tickColorXAxis | propTypes.string |
| tickColorYAxis | propTypes.string |
| tickWidthXAxis | propTypes.number |
| tickWidthYAxis | propTypes.number |
| lineWidth | propTypes.number |
| circleRadiusWidth | propTypes.number |
| circleRadius | propTypes.number |
| showTicks | propTypes.bool |
| legendStyle | propTypes.object |
| showDashedLine | propTypes.bool |
| lineStrokeDashArray | propTypes.array |
| lineStrokeOpacity | propTypes.number |
| GraphWidth | propTypes.number |
| GraphHeight | propTypes.number |

----------

**Todo list:-**  

 -  Add animation to the graph

 -  Add test
 
 -  Add custom legend
 
 -  Code clean

----------

**Author**

    Anoop Singh (codesingh)
    Email: anoop100singh@gmail.com
    Stack Overflow: codesingh(username)
    
----------    

**License**
    
Apache-2.0
