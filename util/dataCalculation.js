import React, { Component } from 'react' 

export function calculateOverallLineChartData(data)
{
    let totalData = [];
    for(let i =0;i<data.length;i++)
    {
        for(let j=0;j<data[i].length;j++)
        {
        totalData.push(data[i][j])  
        }
    }

    return totalData   
}

export function buildColorArray(data,color)
{
    let dataPointsColor = []
    for(let i =0;i<data.length;i++)
    {
        for(let j=0;j<data[i].length;j++)
        {
          dataPointsColor.push( color[i] ? color[i] : '#000')  
        }
    }
    return dataPointsColor
}

// export function getDomainPointsXAxis(minX,maxX)
// {
//     return [minX,maxX]
// }

// export function getDomainPointsYAxis(minX,maxX)
// {
//     return [minX,maxX]
// }