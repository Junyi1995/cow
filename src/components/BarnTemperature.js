import React from 'react';
import ReactDOM from 'react-dom';
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";
import barnData from './mock/output2.json';
export class BarnTemperature extends React.Component {
  render() {
    const data=barnData
    const cols = {
      temperature: {
        min: 0
      }
    };
    return (

      <div className="date-item">
        <div className="item-title">
          <p className="title">BarnTemperature</p>
        </div>
        <div className="data-cubes">
          <div className="cube">
            <Chart height={400} data={data} scale={cols} forceFit>
              <Axis name="Hour" />
                <Axis
                  name="Temperature"
                  label={{  formatter: val => `${val}°C` }}
                  />
                  <Tooltip
                    crosshairs={{
                    type: "y"
                  }}
                  />
                <Geom
                type="line"
                position="Hour*Temperature"
                size={2}
                shape={"smooth"} />
                <Geom
                type="point"
                position="Hour*Temperature"
                size={4}
                shape={"circle"}
                style={{
                  stroke: "#fff",
                  lineWidth: 1
                }}
                />
            </Chart>
          </div>
        </div>
      </div>
    );
  }
}
