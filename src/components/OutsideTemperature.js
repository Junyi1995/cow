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
import barnData from './mock/output.json';
export class OutsideTemperature extends React.Component {
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
          <p className="title">OutsideTemperature</p>
        </div>
        <div className="data-cubes">
          <div className="cube">
            <Chart height={400} data={data} scale={cols} forceFit>
              <Axis name="hour" />
                <Axis
                  name="temperature"
                  label={{  formatter: val => `${val}°C` }}
                  />
                  <Tooltip
                    crosshairs={{
                    type: "y"
                  }}
                  />
                <Geom type="line" position="hour*temperature" size={2} />
                <Geom
                type="point"
                position="hour*temperature"
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
