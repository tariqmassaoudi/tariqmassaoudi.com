import React from 'react';

import { Heatmap ,HeatmapSeries,SequentialLegend} from 'reaviz';
const heatmapData=[
    {'key':'0','data':[{'key':'Friday','data':13.08},{'key':'Monday','data':10.76},{'key':'Saturday','data':12.01},{'key':'Sunday','data':1.11},{'key':'Thursday','data':5.96},{'key':'Tuesday','data':6.3},{'key':'Wednesday','data':8.0},]},{'key':'4','data':[{'key':'Friday','data':18.55},{'key':'Monday','data':18.55},{'key':'Saturday','data':17.63},{'key':'Sunday','data':25.0},{'key':'Thursday','data':12.5},{'key':'Tuesday','data':24.74},{'key':'Wednesday','data':12.5},]},{'key':'5','data':[{'key':'Friday','data':16.61},{'key':'Monday','data':16.09},{'key':'Saturday','data':13.64},{'key':'Sunday','data':11.28},{'key':'Thursday','data':8.27},{'key':'Tuesday','data':10.47},{'key':'Wednesday','data':17.07},]},{'key':'6','data':[{'key':'Friday','data':36.2},{'key':'Monday','data':31.67},{'key':'Saturday','data':30.52},{'key':'Sunday','data':33.45},{'key':'Thursday','data':27.01},{'key':'Tuesday','data':25.02},{'key':'Wednesday','data':38.46},]},{'key':'7','data':[{'key':'Friday','data':26.52},{'key':'Monday','data':18.74},{'key':'Saturday','data':17.34},{'key':'Sunday','data':15.65},{'key':'Thursday','data':13.83},{'key':'Tuesday','data':19.15},{'key':'Wednesday','data':28.15},]},{'key':'8','data':[{'key':'Friday','data':26.38},{'key':'Monday','data':17.94},{'key':'Saturday','data':17.34},{'key':'Sunday','data':17.48},{'key':'Thursday','data':17.41},{'key':'Tuesday','data':22.49},{'key':'Wednesday','data':33.89},]},{'key':'9','data':[{'key':'Friday','data':26.63},{'key':'Monday','data':15.64},{'key':'Saturday','data':15.75},{'key':'Sunday','data':15.32},{'key':'Thursday','data':12.92},{'key':'Tuesday','data':16.7},{'key':'Wednesday','data':28.22},]},{'key':'10','data':[{'key':'Friday','data':28.17},{'key':'Monday','data':28.42},{'key':'Saturday','data':27.23},{'key':'Sunday','data':25.23},{'key':'Thursday','data':29.68},{'key':'Tuesday','data':30.26},{'key':'Wednesday','data':38.04},]},{'key':'11','data':[{'key':'Friday','data':27.2},{'key':'Monday','data':19.29},{'key':'Saturday','data':17.45},{'key':'Sunday','data':23.06},{'key':'Thursday','data':13.36},{'key':'Tuesday','data':17.42},{'key':'Wednesday','data':27.17},]},{'key':'12','data':[{'key':'Friday','data':36.49},{'key':'Monday','data':12.37},{'key':'Saturday','data':26.76},{'key':'Sunday','data':30.97},{'key':'Thursday','data':16.77},{'key':'Tuesday','data':14.92},{'key':'Wednesday','data':23.17},]},{'key':'13','data':[{'key':'Friday','data':42.1},{'key':'Monday','data':26.02},{'key':'Saturday','data':18.64},{'key':'Sunday','data':25.9},{'key':'Thursday','data':21.75},{'key':'Tuesday','data':25.62},{'key':'Wednesday','data':34.84},]},{'key':'14','data':[{'key':'Friday','data':45.94},{'key':'Monday','data':25.05},{'key':'Saturday','data':26.91},{'key':'Sunday','data':45.94},{'key':'Thursday','data':43.13},{'key':'Tuesday','data':40.92},{'key':'Wednesday','data':50.46},]},{'key':'15','data':[{'key':'Friday','data':34.49},{'key':'Monday','data':15.26},{'key':'Saturday','data':13.44},{'key':'Sunday','data':32.21},{'key':'Thursday','data':11.85},{'key':'Tuesday','data':14.2},{'key':'Wednesday','data':25.7},]},{'key':'16','data':[{'key':'Friday','data':44.35},{'key':'Monday','data':12.16},{'key':'Saturday','data':29.81},{'key':'Sunday','data':45.09},{'key':'Thursday','data':24.62},{'key':'Tuesday','data':16.22},{'key':'Wednesday','data':48.83},]},{'key':'17','data':[{'key':'Friday','data':34.94},{'key':'Monday','data':11.02},{'key':'Saturday','data':11.54},{'key':'Sunday','data':25.4},{'key':'Thursday','data':34.63},{'key':'Tuesday','data':13.78},{'key':'Wednesday','data':11.81},]},{'key':'18','data':[{'key':'Friday','data':22.22},{'key':'Monday','data':0.0},{'key':'Saturday','data':14.81},{'key':'Sunday','data':22.22},{'key':'Thursday','data':22.05},{'key':'Tuesday','data':0.0},{'key':'Wednesday','data':22.22},]},{'key':'19','data':[{'key':'Friday','data':28.22},{'key':'Monday','data':8.85},{'key':'Saturday','data':9.33},{'key':'Sunday','data':20.66},{'key':'Thursday','data':20.88},{'key':'Tuesday','data':10.3},{'key':'Wednesday','data':16.53},]},{'key':'20','data':[{'key':'Friday','data':26.85},{'key':'Monday','data':9.1},{'key':'Saturday','data':30.21},{'key':'Sunday','data':35},{'key':'Thursday','data':50},{'key':'Tuesday','data':0.0},{'key':'Wednesday','data':20.1},]},{'key':'21','data':[{'key':'Friday','data':26.85},{'key':'Monday','data':11.11},{'key':'Saturday','data':22.22},{'key':'Sunday','data':22.22},{'key':'Thursday','data':32.72},{'key':'Tuesday','data':0.0},{'key':'Wednesday','data':22.22},]},{'key':'23','data':[{'key':'Friday','data':36.11},{'key':'Monday','data':9.80},{'key':'Saturday','data':14.25},{'key':'Sunday','data':36.21},{'key':'Thursday','data':32.72},{'key':'Tuesday','data':8.31},{'key':'Wednesday','data':17.52},]}
   ]
export default function HeatMap(){
    return(

        <div className='flex'>
<Heatmap
        height={500}
        width={1000}
        data={heatmapData}
        series={<HeatmapSeries colorScheme={"Reds"} />}
        
      />
      <SequentialLegend
        data={heatmapData}
        colorScheme={"Reds"}
        style={{ height: '500px', marginLeft: '10px' }}
      />
</div>
    )



}